import express from "express";
import { Film } from "../models/Film";
import { verifyToken } from "@/verifyToken";
const filmRoutes = express.Router();

filmRoutes.get("/", verifyToken, async (req, res) => {
  try {
    const filmsToGet = await Film.find();
    res.send(filmsToGet);
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
});

export { filmRoutes };
