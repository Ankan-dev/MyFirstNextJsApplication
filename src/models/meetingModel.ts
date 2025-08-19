import mongoose,{model,models, Model, Document, Schema} from "mongoose";

export interface meetingData extends Document {
    date:Date,
    time:string,

    clientEmail:string
}

const meetingSchema:Schema<meetingData>= new Schema({
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    clientEmail:{
        type:String,
        required:true
    }
})

const meeting = models.Meeting as Model<meetingData> || model<meetingData>("Meeting",meetingSchema)

export default meeting;