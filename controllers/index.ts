import { Request, Response, Router } from "express";
import { generateToken, validateToken } from "../config/token";

export function exampleGenerateToken(req: Request, res: Response): Response {
  const payload: Object = {
    email: req.body.email,
    username: req.body.username,
  };
  const token = generateToken(payload);
  return res.status(201).send({ token });
}

export function exampleValidateToken(req: Request, res: Response): Response {
  const token: string | undefined = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decodedToken: Object = validateToken(token);
      return res
        .status(200)
        .send({ message: "Valid Token", data: decodedToken });
    } catch (error) {
      return res.status(401).send({ message: "Invalid Token" });
    }
  }
  return res.status(401).send({ message: "Token not provided" });
}
