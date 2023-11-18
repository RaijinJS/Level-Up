import connectMongoDB from "../../../app/mongodb";
import Task from "../../../model/Task";
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

export async function GET(request: Request) {
  try {
    await connectMongoDB();
    const task = await Task.aggregate([{ $sample: { size: 1 } }]);
    return NextResponse.json({ task });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error: ${error}` }, { status: 500 });
  }
}
