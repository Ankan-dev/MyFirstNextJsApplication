import nodemailer, { createTransport } from 'nodemailer'
import dns from 'dns'
import fs from 'fs'
import path, { dirname } from 'path'
import { responses } from '@/utils/responses'

import { promisify } from 'util'


const ResolveMX = promisify(dns.resolveMx);

let EmailTemplate = fs.readFileSync(path.join(process.cwd(), 'src', 'templates', 'meetingLinkGenerationEmailTemplate.html'), 'utf8');

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

    } catch (error) {
        return false
    }
}

export const SendMeetingLinkMessageMail = async (CompanyName: string, MeetingTitle: string,MeetingLink:string, CompanyUrl: string, MeetingDate: string, MeetingTime: string, email: string) => {
    

    if (!CompanyName || !MeetingTitle || !CompanyUrl || !MeetingDate || !MeetingTime) {

        return responses<String>(400, false, "missing the variables required for the email", "")
    }

    const dateArray=MeetingDate.split(" ");

    const finalDate = `${dateArray[0]}, ${dateArray[2]} ${dateArray[1]}, ${dateArray[3]}`

    try {
        const body = EmailTemplate
            .replace('{{CompanyName}}', CompanyName)
            .replace('{{MeetingTitle}}', MeetingTitle)
            .replace('{{CompanyUrl}}', CompanyUrl)
            .replace('{{MeetingDate}}', finalDate)
            .replace('{{MeetingTime}}', MeetingTime)
            .replace('{{MeetingLink}}',MeetingLink)

        const checkIsEmail = verifyEmail(email);

        if (!checkIsEmail) {
            return responses<string>(400, false, 'Email is not valid', "");
        }

        const checkDomain = await verifyDomain(email);

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

        const subject = `Meeting Invitation – ${MeetingTitle} – ${MeetingDate} at ${MeetingTime}`;

        const text = `
Hello,

You are invited to an online meeting hosted by ${CompanyName}.

Meeting Title: ${MeetingTitle}
Date: ${MeetingDate}
Time: ${MeetingTime}

Join the meeting here: ${MeetingLink}

If you have any questions or need assistance, please email:support@vironexdigital.com

Best regards,
${CompanyName} Team
`;

        const info = await transporter.sendMail({
            from: process.env.MAIL_USERNAME,
            to: email,
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

