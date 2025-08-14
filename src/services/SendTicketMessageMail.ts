import nodemailer, { createTransport } from 'nodemailer'
import dns from 'dns'
import fs from 'fs'
import path, { dirname } from 'path'
import { responses } from '@/utils/responses'

import { promisify } from 'util'
import { info } from '@/utils/responses'

const ResolveMX = promisify(dns.resolveMx);

let EmailTemplate = fs.readFileSync(path.join(process.cwd(),'src','templates','ticketMessageMailTemplate.html'), 'utf8');

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

export const sendMessageEmailToAdmins = async (admin_email: string,fullname: string, email: string, Subject: string, message: string, company?: string)=> {
    if (!fullname || !email || !Subject || !message) {

        return responses<String>(400, false, "missing fullname or email or subject or message", "")
    }

    try {
        const body = EmailTemplate
            .replace('{{FULLNAME}}', fullname)
            .replace('{{EMAIL}}', email)
            .replace('{{COMPANY}}', company || 'N/A')
            .replace('{{SUBJECT}}', Subject)
            .replace('{{MESSAGE}}', message)

        const checkIsEmail = verifyEmail(email);

        if (!checkIsEmail) {
            return responses<string>(400, false, 'Email is not valid', "");
        }

        const checkDomain = await verifyDomain(email);

        if (!checkDomain) {
            return responses<string>(400, false, "responses are invalid")
        }

        console.log(process.env.MAIL_USERNAME)
        console.log(process.env.MAIL_PASSWORD)

        const transporter = createTransport({
            host: "smtpout.secureserver.net",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        })

        const subject = "New Ticket has be generated";

        const text = `Dear Admin, A new message has been send by the client,${fullname} with email address ${email} `;

        const info =await transporter.sendMail({
            from: process.env.MAIL_USERNAME,
            to: admin_email,
            subject: subject,
            text: text,
            html: body
        })

        return responses<string>(200,true,"Email was sent successfully",info.messageId);
    } catch (error) {
        const err = error as Error
        return responses<Error>(500,false,"Internal server error in sending mail for ticket generation",err)
    }


}

