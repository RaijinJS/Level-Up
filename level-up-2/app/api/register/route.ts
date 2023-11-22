import { NextResponse } from "next/dist/server/web/spec-extension/response";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred while registering user" },
      { status: 500 }
    );
  }
}
