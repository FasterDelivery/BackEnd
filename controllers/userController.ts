import { Request, Response } from "express";
import { generateToken, validateToken } from "../config/token";
import User from "../models/User";

interface Payload {
  email: string;
  name: string;
}

export async function register(req: Request, res: Response): Promise<Response> {
  try {
    const newUser = await User.create(req.body);
    if (!newUser) {
      return res.status(400).send("mensaje de error");
    }
    return res.status(201).send({ newUser });
  } catch {
    return res.status(500).send("otro mensaje de error");
  }
}

export async function login(req: Request, res: Response): Promise<Response> {
  try {
    const payload: Payload = {
      email: req.body.email,
      name: req.body.name
    };
    const user = await User.findOne({ where: { email: payload.email } });
    if (!user) {
      return res.status(401).send("mensaje de error");
    }
    //hacer validacion de contrasenia
    const token = generateToken(payload);
    return res.status(201).send({ token, message: "Sesion iniciada" });
  } catch {
    return res.status(500).send("otro mensaje de error");
  }
}

export function exampleUseToken(req: Request, res: Response): Response {
  const token: string | undefined = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decodedToken: any = validateToken(token);
      console.log(decodedToken);
      return res
        .status(200)
        .send({ message: "Valid Token", data: decodedToken });
    } catch (error) {
      return res.status(401).send({ message: "Invalid Token" });
    }
  }
  return res.status(401).send({ message: "Mensaje de error" });
}
