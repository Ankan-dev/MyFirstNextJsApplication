import { NextRequest,NextResponse } from "next/server";
import connectToDatabase from "@/lib/DbConnect";
import SupportTicketModel from "@/models/SupportTicketModel";
import {sendMessageEmailToAdmins} from '@/services/SendTicketMessageMail'
import { error } from "console";

interface data {
    Name: string;
    email:string;
    company:string;
    subject:string;
    message:string;
    createdAt: Date;
}

export async function POST (req:NextRequest): Promise<NextResponse>{
    await connectToDatabase();
    try {
        const { Name, email, company, subject, message }:data = await req.json();


         if(!Name || !email || !company || !subject || !message){
            return NextResponse.json({error:"All fields are required"}, {status:400});
        }

       const newTicked = new SupportTicketModel({
            fullname:Name,
            email,
            company,
            subject,
            message,
        })

        console.log(newTicked)
        const savedTicket = await newTicked.save();
        
        if(!savedTicket){
            return NextResponse.json({error:"Failded to save the ticked"},{status:500})
        }

        if(!savedTicket){
            return NextResponse.json({error:"Failed to create support ticket"}, {status:500});
        }
        const [getEmailResponseForAnkan, getEmailResponseForSoham, getEmailResponseForShreya, getEmailResponseForTista] = await Promise.all([sendMessageEmailToAdmins(process.env.ADMIN_ANKAN as string,Name,email,subject,message,company),
            sendMessageEmailToAdmins(process.env.ADMIN_SOHAM as string,Name,email,subject,message,company),
            sendMessageEmailToAdmins(process.env.ADMIN_SHREYA as string,Name,email,subject,message,company),
            sendMessageEmailToAdmins(process.env.ADMIN_TISTA as string,Name,email,subject,message,company)])
        
        
        

        if(getEmailResponseForAnkan.success===false){
            return NextResponse.json({getEmailResponseForAnkan},{status:getEmailResponseForAnkan.status})
        }

        if(getEmailResponseForSoham.success===false){
            return NextResponse.json({getEmailResponseForSoham},{status:getEmailResponseForSoham.status})
        }

        if(getEmailResponseForShreya.success===false){
            return NextResponse.json({getEmailResponseForShreya},{status:getEmailResponseForShreya.status})
        }

        if(getEmailResponseForTista.success===false){
            return NextResponse.json({getEmailResponseForTista},{status:getEmailResponseForTista.status})
        }

        return NextResponse.json({message:"Support ticket created successfully"}, {status:201});

    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status:500});
    }
}