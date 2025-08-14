import mongoose,{model,models, Model, Document, Schema} from "mongoose";

export interface meetingData extends Document {
    date:Date,
    time:string,
    admin:{
        email:string,
        joined:boolean
    },
    emailOne:{
        email:string,
        joined:boolean
    },
    emailTwo?:{
        email:string,
        joined:boolean
    },
    emailThree?:{
        email:string,
        joined:boolean
    }
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
    admin:{
        email:{
            type:String,
            required:true
        },
        joined:{
            type:Boolean,
            required:true
        }
    },
    emailOne:{
        email:{
            type:String,
            required:true
        },
        joined:{
            type:Boolean,
            required:true
        }
    },
    emailTwo:{
       email:{
            type:String,
            required:true
        },
        joined:{
            type:Boolean,
            required:true
        } 
    },
    emailThree:{
        email:{
            type:String,
            required:true
        },
        joined:{
            type:Boolean,
            required:true
        }
    }
})

const meeting = models.Meeting as Model<meetingData> || model<meetingData>("Meeting",meetingSchema)

export default meeting;