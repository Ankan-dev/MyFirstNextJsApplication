import mongoose from "mongoose";

type ConnectionString= {
    isConnected?: number;
}

const connection: ConnectionString = {};

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Database Is Atready Connected");
        return ;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI as string || "")

        connection.isConnected = db.connections[0].readyState;
        console.log("Database Is Connected Successfullly");
    } catch (error) {

        console.error("Database Connection Failed due to: ", error as Error)
        process.exit(1);

        
    }
}

export default dbConnect;