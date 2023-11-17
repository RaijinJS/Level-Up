import connectMongoDB from "app/mongodb";
import Task from "../../../model/Task";
import { NextResponse } from "next/server";
// TODO: ID route, needs to be put somewhere else, maybe in the pages\api?

export async function POST(request) {
  const { title, description, image } = await request.json();
  await connectMongoDB();
  await Task.create({ title, description, image });
  return NextResponse.json({
    message: 'Task generated successfully',
  }, {
    status: 201
  });
}

export async function GET( request){
      try {
         await connectMongoDB();
          const task = await Task.aggregate([{ $sample: { size: 1 } }]);
          return NextResponse.json({task});
      }
        catch (error) {
          return NextResponse.json({
              message: 'Error',
          },{
              status: 400
          })

      }
    }
export async function GET(request) {
  try {
    await connectMongoDB();
    const task = await Task.aggregate([{ $sample: { size: 1 } }]);
    return NextResponse.json({ task });
  }
  catch (error) {
    return NextResponse.json({
      message: 'Error',
    }, {
      status: 400
    });

  }
}
