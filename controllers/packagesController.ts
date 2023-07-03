import { Request, Response } from "express";
import { User, Package } from "../models";

export async function selectPackages(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const packageIds: number[] = req.body;
    const user: User | null = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const packages: Package[] = await Package.findAll({
      where: {
        id: packageIds
      }
    });
    if (packageIds.length !== packages.length) {
      return res.status(400).send({ message: "Some packages do not exist" });
    }
    await Package.update({ UserId: user.id }, { where: { id: packageIds } });
    return res.status(200).send({ message: "All packages selected" });
  } catch {
    return res.status(500).send("Internal Server Error");
  }
}

export async function editPackage(req: Request, res: Response) {
  try {
    const packageId = req.params.idPackage;
    const userId = req.params.idUser;
    const [_, [editedPackage]] = await Package.update(req.body, {
      where: { id: packageId, UserId: userId },
      returning: true,
      individualHooks: true
    });
    console.log(_);
    if (!editedPackage) {
      return res.status(404).send("Package not found");
    }
    return res
      .status(200)
      .send({ editedPackage, message: "Package edited successfully" });
  } catch {
    return res.status(500).send({ message: "Internal Server Error" });
  }
}

export async function getAllDeliveryPackages(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const packages: Package[] = await Package.findAll({
      where: {
        UserId: userId
      }
    });
    if (!packages[0]) {
      return res.status(404).send({ message: "No packages found" });
    }
    return res.status(200).send({ packages, message: "All packages" });
  } catch {
    return res.status(500).send({ message: "Internal Server Error" });
  }
}

export async function getAllPackages(req: Request, res: Response) {
  try {
    const allPackages = await Package.findAll();
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
    console.log(_);
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
    const editedPackage = await Package.destroy({
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

