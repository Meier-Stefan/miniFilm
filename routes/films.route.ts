import express from "express";
import { Film } from "../models/Film";
const filmRoutes = express.Router();

filmRoutes.get("/", async (req, res) => {
  try {
    const filmsToGet = await Film.find();
    res.send(filmsToGet);
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
});

export { filmRoutes };
