import { Request, Response } from "express";
import { generateToken, validateToken } from "../config";

interface Payload {
  email: string;
  username: string;
}


interface DecodedToken {
  email: string;
  username: string;
}

export function exampleGenerateToken(req: Request, res: Response): Response {
  const payload: Payload = {
    email: req.body.email,
    username: req.body.username
  };
  const token = generateToken(payload);
  return res.status(201).send({ token });
}

export function exampleValidateToken(req: Request, res: Response): Response {
  const token: string | undefined = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decodedToken: DecodedToken = validateToken(token) as DecodedToken;
      if (typeof decodedToken === "object") {
        return res
          .status(200)
          .send({ message: "Valid Token", data: decodedToken });
      } else {
        return res.status(401).send({ message: "Invalid Token" });
      }
    } catch (error) {
      return res.status(401).send({ message: "Invalid Token" });
    }
  }
  return res.status(401).send({ message: "Token not provided" });
}