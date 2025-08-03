import {models,Model,model,Document,Schema} from "mongoose";

export interface ISupportTicket extends Document{
    fullname: string;
    email:string;
    company:string;
    subject:string;
    message:string;
    createdAt: Date;
}


const supportTicketSchema: Schema<ISupportTicket>= new Schema({
    fullname:{
        type:String,
        required:[true,"Full name is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email must be unique"],
        match:[/^\S+@\S+\.\S+$/,"Please provide a valid email address"]
    },
    company:{
        type:String,
        required:[true,"Company name is required"],
    },
    subject:{
        type:String,
        required:[true,"Subject is required"],
    },
    message:{
        type:String,
        required:[true,"Message is required"],
    },
},{timestamps:true});

const SupportTicketModel = (models.SupportTicket as Model<ISupportTicket>)||(model("SupportTicket",supportTicketSchema));

export default SupportTicketModel;