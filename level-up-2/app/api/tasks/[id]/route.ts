import connectMongoDB from "../../../lib/mongodb";
import Task from "../../../model/Task";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: { params: { id: number } }) {
  try {
    const { id } = params;
    const { newCompleted: completed } = await request.json();
    await connectMongoDB();
    const res = await Task.findByIdAndUpdate(id, { completed });
    if (res && res.ok) {
      return NextResponse.json({ message: "Task updated successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Task could not be updated", status: 500 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error: ${error}`, status: 500 });
  }
}

// TODO: DONE - Delete delete function that was never used

export async function GET(request: Request) {
  try {
    await connectMongoDB();
    const completedTasks = await Task.find({ completed: true });
    return NextResponse.json({ completedTasks }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error: ${error}`, status: 500 });
  }
}
