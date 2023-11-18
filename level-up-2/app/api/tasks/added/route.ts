import connectMongoDB from "../../../../app/mongodb";
import Task from "../../../../model/Task";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  try {
    await connectMongoDB();
    const task = await Task.find({
      added: true,
    });
    return NextResponse.json({ task });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error: ${error}` }, { status: 500 });
  }
}