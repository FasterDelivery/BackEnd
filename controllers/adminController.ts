import { Request, Response } from "express";
import { User, Package } from "../models";

export async function getAllDeliveries(req: Request, res: Response) {
  try {
    const allUSers: Object = await User.findAll({
      where: { isAdmin: false }
    });
    if (!allUSers) {
      return res.status(404).send({ message: "No users found" });
    }
    return res.status(200).send({ allUSers, message: "All Users" });
  } catch {
    return res.status(500).send({ message: "Internal Server Error" });
  }
}

export async function getAllActiveDeliveries(req: Request, res: Response) {
  try {
    const allUSers: Object = await User.findAll({
      where: { isAdmin: false, status: "active" }
    });
    if (!allUSers) {
      return res.status(404).send({
        message: "Active users not found"
      });
    }
    return res.status(200).send({ allUSers, message: "All active users" });
  } catch {
    return res.status(500).send({ message: "Internal Server Error" });
  }
}

export async function getAllPackages(req: Request, res: Response) {
  try {
    const allPackages: Object = await Package.findAll();
    if (!allPackages) {
      return res.status(404).send({ message: "Packages not found" });
    }
    return res.status(200).send({ allPackages, message: "All packages" });
  } catch {
    return res.status(500).send({ message: "Internal Server Error" });
  }
}

export async function createPackage(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const newPackage = await Package.create(req.body);
    if (!newPackage) {
      return res.status(400).send("Error creating package");
    }
    return res
      .status(201)
      .send({ newPackage, message: "Package created successfully" });
  } catch {
    return res.status(500).send({ message: "Internal Server Error" });
  }
}

export async function updatePackage(req: Request, res: Response) {
  try {
    const packageId = req.params.id;
    const [_, [editedPackage]] = await Package.update(req.body, {
      where: { id: packageId },
      returning: true,
      individualHooks: true
    });
    if (!editedPackage) {
      return res.status(404).send("Package not found");
    }
    return res
      .status(200)
      .send({ editedPackage, message: "Package updated successfully" });
  } catch {
    return res.status(500).send({ message: "Internal Server Error" });
  }
}

export async function deletePackage(req: Request, res: Response) {
  try {
    const packageId = req.params.id;
    const editedPackage: any = await Package.destroy({
      where: { id: packageId }
    });
    if (!editedPackage) {
      return res.status(404).send("Package not found");
    }
    return res.status(200).send({ message: "Package deleted successfully" });
  } catch {
    return res.status(500).send({ message: "Internal Server Error" });
  }
}
