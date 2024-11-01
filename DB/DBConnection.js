import mongoose from "mongoose";

const connectDB = async () => {
try {
     const response = await mongoose.connect(process.env.MONGODB_URL);
     console.log("MongoDB connected");
     
} catch (error) {
     console.log("Error while connecting to DB", error);
     
}
}

export default connectDB;