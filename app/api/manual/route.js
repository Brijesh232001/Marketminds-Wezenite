import { connectTradeMongoDB } from "@/lib/trade";
import trade_history from "@/models/trade_history";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const {
    
    open_time,
    open_price,
    close_time,
    close_price,
    side,
    symbol,
    volume,
    stop_loss,
    take_profit,
    error,
    success,
  } = await req.json();
  
  try {
    await connectTradeMongoDB();
    await trade_history.create({ 
        
        open_time,
        open_price,
        close_time,
        close_price,
        side,
        symbol,
        volume,
        stop_loss,
        take_profit,
        error,
    success,
    });

    console.log("Data sent successfully");
    return NextResponse.json({
      msg: ["Data sent successfully"],
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log("Validation error:", errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      console.log("Other error occurred:", error);
      return NextResponse.json({ msg: ["Unable to send Data."] });
    }
  }
}
