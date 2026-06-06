import mongoose from "mongoose";
import { env } from "./env.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connet(env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connecion.host}`);
  } catch (error) {
    console.error("DB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
