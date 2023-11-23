import connectMongoDB from "../../../../../lib/mongodb";
import Task from "../../../../model/Task";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: number } },
) {
  try {
    const { id } = params;
    await connectMongoDB();
    const task = await Task.findOneAndUpdate(
      { _id: id },
      { $set: { added: false, completed: false } },
      { new: true },
    );
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error: ${error}`, status: 500 });
  }
}
