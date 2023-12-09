import { NextResponse } from "next/dist/server/web/spec-extension/response";
import connectMongoDB from "../../../lib/mongodb";
import User from "../../model/User";
import bcrypt from "bcryptjs";

interface IUser {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, password }: IUser = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error occurred while registering user" }, { status: 500 });
  }
}
