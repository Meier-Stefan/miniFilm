import joi from "joi";
import { UserData } from "../models/User";

const loginValidation = (data: UserData) => {
  const schemaValidation = joi.object({
    email: joi.string().required().min(6).max(256).email(),
    password: joi.string().required().min(6).max(1024),
  });

  return schemaValidation.validate(data);
};

export { loginValidation };
