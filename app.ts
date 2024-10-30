import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { filmRoutes } from "./routes/films.route";
import { authRoutes } from "./routes/auth.route";

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
app.use("/film", filmRoutes);
app.use("/user", authRoutes);

app.listen(3000);
