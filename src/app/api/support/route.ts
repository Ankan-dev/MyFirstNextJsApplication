import { NextRequest,NextResponse } from "next/server";
import connectToDatabase from "@/lib/DbConnect";
import SupportTicketModel from "@/models/SupportTicketModel";
import { ISupportTicket } from "@/models/SupportTicketModel";

export async function POST (req:NextRequest): Promise<NextResponse>{
    await connectToDatabase();
    try {
        const { fullname, email, company, subject, message }:ISupportTicket = await req.json();

         if(!fullname || !email || !company || !subject || !message){
            return NextResponse.json({error:"All fields are required"}, {status:400});
        }

        const newTicked = new SupportTicketModel({
            fullname,
            email,
            company,
            subject,
            message,
        })

        const savedTicket = await newTicked.save();

        if(!savedTicket){
            return NextResponse.json({error:"Failed to create support ticket"}, {status:500});
        }

        return NextResponse.json({message:"Support ticket created successfully"}, {status:201});

    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status:500});
    }
}