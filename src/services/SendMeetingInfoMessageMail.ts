import { createTransport } from 'nodemailer'
import dns from 'dns'
import fs from 'fs'
import path from 'path'
import { responses } from '@/utils/responses'

import { promisify } from 'util'


const ResolveMX = promisify(dns.resolveMx);

const EmailTemplate = fs.readFileSync(path.join(process.cwd(), 'src', 'templates', 'meetingLinkGenerationEmailTemplate.html'), 'utf8');

const verifyEmail = (email: string): boolean => {
    const emailRegex = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"[^\\"]+")@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

    const checkEmailValidation: boolean = emailRegex.test(email);

    if (!checkEmailValidation) {
        return false
    }

    return true
}

const verifyDomain = async (email: string) => {
    const domain: string = email.split('@')[1];

    try {
        const checkDomain = await ResolveMX(domain);

        return checkDomain && checkDomain.length;

    } catch {
        return false
    }
}

export const sendMeetingInfoToadmins = async (emailId:string,meetingDate:string, meetingTime:string, adminEmail:string) => {
    

    if (!emailId || !meetingDate || !meetingTime) {

        return responses<string>(400, false, "missing the variables required for the email", "")
    }

    

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date(meetingDate);

    const DateOfTheMonth = date.getDate();
    const getDayNumber= date.getDay();
    const Day = days[getDayNumber];
    const monthNumber=date.getMonth();
    const Month = months[monthNumber];
    const Year = date.getFullYear();

    const finalDate = `${DateOfTheMonth} ${Month} ${Year}, ${Day}`

    try {
        const body = EmailTemplate
            .replace('{{emailid}}', emailId)
            .replace('{{MeetingDate}}', finalDate)
            .replace('{{MeetingTime}}', meetingTime)

        const checkIsEmail = verifyEmail(adminEmail);

        if (!checkIsEmail) {
            return responses<string>(400, false, 'Email is not valid', "");
        }

        const checkDomain = await verifyDomain(adminEmail);

        if (!checkDomain) {
            return responses<string>(400, false, "responses are invalid")
        }


        const transporter = createTransport({
            host: "smtpout.secureserver.net",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        })

        const subject = `Meeting Invitation – Client's Scheduled Meeting – ${finalDate} at ${meetingTime}`;

        const text = `
Hello,

You are invited to an online meeting hosted by Vironex digital.

Meeting Title: Client's Scheduled Meeting
Date: ${finalDate}
Time: ${meetingTime}


Best regards,
Vironex Digital Team
`;

        const info = await transporter.sendMail({
            from: process.env.MAIL_USERNAME,
            to: adminEmail,
            subject: subject,
            text: text,
            html: body
        })

        return responses<string>(200, true, "Email was sent successfully", info.messageId);
    } catch (error) {
        const err = error as Error
        return responses<Error>(500, false, "Internal server error in sending mail for ticket generation", err)
    }


}

