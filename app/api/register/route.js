
// import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

import { sendVerificationEmail } from '@/lib/sendEmail'; // Adjust the path as per your project structure
import { NextResponse } from 'next/server';

import { generateToken } from "@/lib/helpers";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    console.log("in register api..");
    await connectMongoDB();
    
    console.log("creting user new...");
    let latestUserId = 100;
    const latestUser = await User.findOne().sort({ user_id: -1 });
    console.log("latest user", latestUser)
    if (latestUser) {
      latestUserId = latestUser.user_id;
    }
    const user_id = latestUserId + 1;
    console.log("user id before create", user_id)
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = generateToken();

    await User.create({ user_id, name, email, password : hashedPassword , token});

    console.log("sendibng ,mail from reister api");

    const mailsentres = await sendVerificationEmail(email, token);

    return NextResponse.json({ message: "Verification email sent successfully." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
