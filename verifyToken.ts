import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
}

const verifyToken = (req: Request, res: Response, next: NextFunction): any => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ message: "Acess denied" });
  }
  try {
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as DecodedToken;
    req.body.userId = decodedToken.id;
    next();
  } catch (error) {
    return res.status(401).send({ message: "invalid token" });
  }
};

export { verifyToken };
