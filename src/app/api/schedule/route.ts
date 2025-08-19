import { NextRequest, NextResponse } from "next/server";
import { responses } from "@/utils/responses"
import meeting from '@/models/meetingModel'
import dbConnect from '@/lib/DbConnect'

import {sendMeetingInfoToadmins} from '@/services/SendMeetingInfoMessageMail'

interface requestedData {
    scheduledDate: string,
    scheduledTime: string,
    email: string
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    const { scheduledDate, scheduledTime, email }: requestedData = await req.json();

    await dbConnect();

    if (!scheduledDate || !email || !scheduledTime) {
        return NextResponse.json(responses(400, false, "schedule date or scheduled Time or emails are missing", ""), { status: 400 })
    }

    const finalDate = new Date(scheduledDate)
   

    try {

        const createScheduledMeetingDoc = await meeting.create({
            date:finalDate,
            time:scheduledTime,
            clientEmail:email
        })

        if(!createScheduledMeetingDoc){
            return NextResponse.json(responses(500,false,"Could not create the database due to some internal server error",""),{status:500});
        }

        const [sendToAnkan,sendToShreya,sentToTista,sendToSoham]= await Promise.all([
            sendMeetingInfoToadmins(email,scheduledDate.toString(),scheduledTime,process.env.ADMIN_ANKAN as string),
            sendMeetingInfoToadmins(email,scheduledDate.toString(),scheduledTime,process.env.ADMIN_SOHAM as string),
            sendMeetingInfoToadmins(email,scheduledDate.toString(),scheduledTime,process.env.ADMIN_SHREYA as string),
            sendMeetingInfoToadmins(email,scheduledDate.toString(),scheduledTime,process.env.ADMIN_TISTA as string)
        ])

        
        if(!sendToAnkan.success){
              return NextResponse.json(responses<string>(sendToAnkan.status,sendToAnkan.success,sendToAnkan.message,sendToAnkan.data as string),{status:200});
        }
        if(!sendToShreya.success){
              return NextResponse.json(responses<string>(sendToShreya.status,sendToShreya.success,sendToShreya.message,sendToShreya.data as string),{status:200});
        }
        if(!sentToTista.success){
              return NextResponse.json(responses<string>(sentToTista.status,sentToTista.success,sentToTista.message,sentToTista.data as string),{status:200});
        }
        if(!sendToSoham.success){
              return NextResponse.json(responses<string>(sendToSoham.status,sendToSoham.success,sendToSoham.message,sendToSoham.data as string),{status:200});
        }
        return NextResponse.json(responses(200,true,"Meeting scheduled successfully",""),{status:200});
    } catch (error) {
        return NextResponse.json(responses(500,false,"can't generate meeting link due to internal server error",""),{status:500})
    }




}