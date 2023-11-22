import connectMongoDB from "../../../lib/mongodb";
import Task from "../../model/Task";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, description, image } = await request.json();
    await connectMongoDB();
    const res = await Task.create({ title, description, image });
    if (res.ok) {
      return NextResponse.json({ message: "Task generated successfully" }, { status: 201 });
    } else {
      return NextResponse.json({ message: "Task could not be created" }, { status: 500 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error: ${error}` }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await connectMongoDB();

    // Find a random task with added set to false
    const randomTask = await Task.aggregate([
      { $match: { added: false } },
      { $sample: { size: 1 } },
    ]);

    if (!randomTask || randomTask.length === 0) {
      console.log('none left')
      return NextResponse.json(
        { message: "No unadded tasks remaining" },
        { status: 404 }
      );
    }

    // Update the selected task's added field to true
    const updatedTask = await Task.findOneAndUpdate(
      { _id: randomTask[0]._id },
      { $set: { added: true } },
      { new: true }
    );

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error: ${error}` }, { status: 500 });
  }
}