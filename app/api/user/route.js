import { connectMongoDB } from "@/lib/mongodb";
import Users from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await Users.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}