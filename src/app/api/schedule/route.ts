import { NextRequest, NextResponse } from "next/server";
import { responses } from "@/utils/responses"
import { generateMeedtingToken } from "@/utils/creatingMeetingTokens"
import dbConnect from '@/lib/DbConnect'
import meeting from '@/models/meetingModel'
import {SendMeetingLinkMessageMail} from '@/services/SendMeetingLinkMessageMail'

interface requestedData<T> {
    scheduledDate: Date,
    scheduledTime: string,
    emails: T[]
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    const { scheduledDate, scheduledTime, emails }: requestedData<string> = await req.json();

    await dbConnect();

    if (!scheduledDate || !emails || !scheduledTime) {
        return NextResponse.json(responses(400, false, "schedule date or scheduled Time or emails are missing", ""), { status: 400 })
    }

    const meetingDate = new Date(scheduledDate);

    const meetToken = generateMeedtingToken(scheduledDate,scheduledTime,emails);

    const meetLink = `${process.env.BASE_URI}/meet/${meetToken}`

    const NumberOfEmails = emails.length;

    try {

        switch (NumberOfEmails) {
            case 1: {
                const createMeeting = await meeting.create({
                    date: meetingDate,
                    time: scheduledTime,
                    admin: {
                        email: process.env.MAIL_USERNAME,
                        joined: false
                    },
                    emailOne: {
                        email: emails[0],
                        joined: false
                    }
                })

                if (!createMeeting) {
                    return NextResponse.json(responses(500, false, "couldn't save the meeting details due to internal server error", ""), { status: 500 })
                }

                const [emailSentToAdmin,emailSentToEmailOne]= await Promise.all([SendMeetingLinkMessageMail("Vironex Digital","Online Meeting Invitation",meetLink,process.env.BASE_URI as string,meetingDate.toString(),scheduledTime,process.env.MAIL_USERNAME as string),SendMeetingLinkMessageMail("Vironex Digital","Online Meeting Invitation",meetLink,process.env.BASE_URI as string,meetingDate.toString(),scheduledTime, emails[0])])

                if(!emailSentToAdmin || !emailSentToEmailOne){
                    return NextResponse.json(responses(500,false,"Error in sending emails",""))
                }

                break;
            }
            case 2: {
                const createMeeting = await meeting.create({
                    date: meetingDate,
                    time: scheduledTime,
                    admin: {
                        email: process.env.MAIL_USERNAME,
                        joined: false
                    },
                    emailOne: {
                        email: emails[0],
                        joined: false
                    },
                    emailTwo: {
                        email: emails[1],
                        joined: false
                    }
                })

                if (!createMeeting) {
                    return NextResponse.json(responses(500, false, "couldn't save the meeting details due to internal server error", ""), { status: 500 })
                }

                const [emailSentToAdmin,emailSentToEmailOne,emailSentToEmailTwo]= await Promise.all([SendMeetingLinkMessageMail("Vironex Digital","Online Meeting Invitation",meetLink,process.env.BASE_URI as string,meetingDate.toString(),scheduledTime,process.env.MAIL_USERNAME as string),SendMeetingLinkMessageMail("Vironex Digital","Online Meeting Invitation",meetLink,process.env.BASE_URI as string,meetingDate.toString(),scheduledTime, emails[0]),SendMeetingLinkMessageMail("Vironex Digital","Online Meeting Invitation",meetLink,process.env.BASE_URI as string,meetingDate.toString(),scheduledTime, emails[1])])

                if(!emailSentToAdmin || !emailSentToEmailOne || !emailSentToEmailTwo){
                    return NextResponse.json(responses(500,false,"Error in sending emails",""))
                }

                break;
            }
            case 3: {
                const createMeeting = await meeting.create({
                    date: meetingDate,
                    time: scheduledTime,
                    admin: {
                        email: process.env.MAIL_USERNAME,
                        joined: false
                    },
                    emailOne: {
                        email: emails[0],
                        joined: false
                    },
                    emailTwo: {
                        email: emails[1],
                        joined: false
                    },
                    emailThree: {
                        email: emails[2],
                        joined: false
                    }
                })

                if (!createMeeting) {
                    return NextResponse.json(responses(500, false, "couldn't save the meeting details due to internal server error", ""), { status: 500 })
                }

                const [emailSentToAdmin,emailSentToEmailOne,emailSentToEmailTwo,emailSentToEmailThree]= await Promise.all([SendMeetingLinkMessageMail("Vironex Digital","Online Meeting Invitation",meetLink,process.env.BASE_URI as string,meetingDate.toString(),scheduledTime,process.env.MAIL_USERNAME as string),SendMeetingLinkMessageMail("Vironex Digital","Online Meeting Invitation",meetLink,process.env.BASE_URI as string,meetingDate.toString(),scheduledTime, emails[0]),SendMeetingLinkMessageMail("Vironex Digital","Online Meeting Invitation",meetLink,process.env.BASE_URI as string,meetingDate.toString(),scheduledTime, emails[1]),SendMeetingLinkMessageMail("Vironex Digital","Online Meeting Invitation",meetLink,process.env.BASE_URI as string,meetingDate.toString(),scheduledTime, emails[2])])

                if(!emailSentToAdmin || !emailSentToEmailOne || !emailSentToEmailTwo || !emailSentToEmailThree){
                    return NextResponse.json(responses(500,false,"Error in sending emails",""))
                }

                break;
            }
            default: {
                return NextResponse.json(responses(500, false, "can't schedule the meeting due to internal server error", ""), { status: 500 })
            }

        }

        return NextResponse.json(responses(200,true,"Meeting scheduled successfully",""),{status:200});
    } catch (error) {
        return NextResponse.json(responses(500,false,"can't generate meeting link due to internal server error",""),{status:500})
    }




}