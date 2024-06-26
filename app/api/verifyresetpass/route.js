import { NextResponse } from 'next/server';
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');

  try {
    await connectMongoDB();
    
    // Verify the token
    const user = await User.findOne({ token });
    if (!user) {
      return NextResponse.json({ message: 'Invalid token.' }, { status: 400 });
    }
    
    // Update the user's verified status
    if (user) {
      // user.isVerified = true;
      // user.token = ""; // Clear the token after verification
      console.log("User updated from verify api....");
      await user.save();
  
    // Redirect to the dashboard on successful verification
    const redirectUrl = `${process.env.NEXTAUTH_URL}/reset_password?token=${user.token}`;
    return NextResponse.redirect(redirectUrl);
    } else {
      res.status(400).json({ message: 'Invalid token' });
    }

  } catch (error) {
    console.error('Error verifying user:', error);
    return NextResponse.json({ message: 'Failed to verify user.' }, { status: 500 });
  }
}
