import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { registerValidation } from "@/validations";

const authRoutes = express.Router();

authRoutes.post("/register", async (req, res): Promise<any> => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    return res.status(400).send({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 5);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const saveUser = await user.save();
    res.send(saveUser);
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
});

export { authRoutes };
