import { NextResponse } from "next/dist/server/web/spec-extension/response";
import connectMongoDB from "../../../lib/mongodb";
import User from "../../model/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { newUser } = await request.json();
    const hashedPassword = await bcrypt.hash(newUser.password, 10);

    await connectMongoDB();
    await User.create({ ...newUser, password: hashedPassword });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error occurred while registering user" }, { status: 500 });
  }
}
