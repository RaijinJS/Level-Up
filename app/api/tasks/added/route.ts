import connectMongoDB from "../../../../lib/mongodb";
import Task from "../../../model/Task";
import { NextResponse } from "next/server";
import { TaskType } from "../../../types/Task";

export async function GET() {
  try {
    await connectMongoDB();
    const tasks: TaskType[] = await Task.find({
      added: true,
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error: ${error}` }, { status: 500 });
  }
}
