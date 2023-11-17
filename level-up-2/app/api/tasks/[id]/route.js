import connectMongoDB from "app/mongodb";
import Task from "../../../../model/Task";
import { NextResponse } from "next/server";
// TODO: ID route, needs to be put somewhere else, maybe in the pages\api?

export async function PUT(request, { params }) {
  const { id } = params;
  const { newCompleted: completed } = await request.json();
  await connectMongoDB(); 
  await Task.findByIdAndUpdate(id, { completed });
  return NextResponse.json(
    {
      message: "Task updated successfully",
    },
    {
      status: 200,
    }
  );
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const res = await Task.findByIdAndDelete(id);
  return NextResponse.json(
    {
      message: "Task deleted successfully",
    },
    {
      status: 200,
    }
  );
}
export async function GET(request) {
  try {
    await connectMongoDB();
    const completedTasks = await Task.find({ completed: true });
    return NextResponse.json(
      {
        completedTasks,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
      },
      {
        status: 400,
      }
    );
  }
}
