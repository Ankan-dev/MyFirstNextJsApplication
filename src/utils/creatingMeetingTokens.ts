import jwt from 'jsonwebtoken';

export const generateMeedtingToken = (date:Date,time:string,emails:Array<string>):string=>{
    const token = jwt.sign({
        Date:date,
        Time:time,
        AdminEmail:process.env.MAIL_USERNAME,
        Email_One:emails[0],
        Email_Two:emails[1],
        Email_Three:emails[2]
    },process.env.JWTMEETINGSECRETKEY as string)

    return token;
}

interface tokenData {
    Date:Date,
    Time:string,
    AdminEmail:string,
    Email_One:string,
    Email_Two?:string,
    Email_Three?:string
}

export const verifyMeetingToken = (token:string):tokenData=>{
    const data = jwt.verify(token,process.env.JWTMEETINGSECRETKEY as string)

    return data as tokenData
}