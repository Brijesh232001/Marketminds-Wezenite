
// import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

import { NextResponse } from 'next/server';


export async function POST(req) {
  try {
    const { token, password } = await req.json();
    console.log("in resetpass api..");
    await connectMongoDB();
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.findOne({ token: token});  
    user.token = "";
    user.password = hashedPassword;
    await user.save();
    
    console.log("password changed successfully");

    return NextResponse.json( {success : true , message: 'Password has been reset successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error resetting password', error  },
      { status: 500 }
    );
  }
}
