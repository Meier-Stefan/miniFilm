import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

// Load environment variables
config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

const uri: string = process.env.MONGODB_URI as string;

const main = async () => {
  console.log(`Connecting to DB`);
  await mongoose.connect(uri);
  console.log(`Connected to DB`);
};

main().catch((error) => console.log(error));

app.use(express.json());

app.listen(3000);
