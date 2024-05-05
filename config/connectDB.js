import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("error", (err)=> {
            console.log("mongoDB connection error. \n", err)
        })

        mongoose.connection.on("connected", ()=> {
            console.log("mongoDB connected.")
        })

        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("Could not connect to mongoDB");
        process.exit(1);
    }
}

export default connectDB