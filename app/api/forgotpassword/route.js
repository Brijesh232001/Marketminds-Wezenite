
// import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

import { sendVerificationEmail } from '@/lib/sendForgotPassMail'; // Adjust the path as per your project structure
import { NextResponse } from 'next/server';

import { generateToken } from "@/lib/helpers";

export async function POST(req) {
  try {
    const { email } = await req.json();
    console.log("in forgotpass api..");
    await connectMongoDB();
    const token = generateToken();
    
    const user = await User.findOne({ email });

    user.token = token;
    user.save();

    console.log("sendibng ,mail from forgotpass api");

    const mailsentres = await sendVerificationEmail(email, token);

    return NextResponse.json({ message: "Verification email sent successfully." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
