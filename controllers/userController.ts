import { Request, Response } from "express";
import { generateToken } from "../config/token";
import { User } from "../models";
import { IPayload } from "../interfaces/IPayload";

export async function register(req: Request, res: Response): Promise<Response> {
  try {
    const newUser = await User.create(req.body);
    if (!newUser) {
      return res.status(400).send({ message: "Failed to create user" });
    }
    return res.status(201).send({ newUser });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
}

export async function login(req: Request, res: Response): Promise<Response> {
  try {
    const payload: IPayload = {
      email: req.body.email,
      password: req.body.password
    };
    const users = await User.findAll();
    const user = await User.findOne({ where: { email: payload.email } });
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }
    payload.isAdmin = user.dataValues.isAdmin;
    const isValid = await user.validatePassword(payload.password);
    if (!isValid) return res.status(403).send("Unauthorized");
    const token = generateToken(payload);
    return res.status(201).send({ token, user, message: "Session started" });
  } catch {
    return res.status(500).send("Internal Server Error");
  }
}

export async function editUser(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const [_, [editedUser]] = await User.update(req.body, {
      where: { id: userId },
      returning: true,
      individualHooks: true
    });
    if (!editedUser) {
      return res.status(401).send("Invalid credentials");
    }
    return res
      .status(200)
      .send({ editedUser, message: "User edited successfully" });
  } catch {
    return res.status(500).send("Internal Server Error");
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const deletedUser: any = await User.destroy({
      where: { id: userId }
    });
    if (!deletedUser) {
      return res.status(401).send("Invalid credentials");
    }
    return res.status(200).send({ message: "User deleted" });
  } catch {
    return res.status(500).send("Internal Server Error");
  }
}
