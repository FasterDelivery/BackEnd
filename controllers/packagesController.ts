import { Request, Response } from "express";
import {
  selectPackagesService,
  editPackageService,
  getAllDeliveryPackagesService,
  getAllPackagesService,
  createPackageService,
  updatePackageService,
  deletePackageService
} from "../services/packageService";

export async function selectPackages(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const packageIds: number[] = req.body;
    await selectPackagesService(userId, packageIds);
    return res.status(200).send({ message: "All packages selected" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function editPackage(req: Request, res: Response) {
  try {
    const packageId = req.params.idPackage;
    const userId = req.params.idUser;
    const editedPackage = await editPackageService(packageId, userId, req.body);
    return res
      .status(200)
      .send({ editedPackage, message: "Package edited successfully" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function getAllDeliveryPackages(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const packages = await getAllDeliveryPackagesService(userId);
    return res.status(200).send({ packages, message: "All packages" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function getAllPackages(req: Request, res: Response) {
  try {
    const allPackages = await getAllPackagesService();
    return res.status(200).send({ allPackages, message: "All packages" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function createPackage(req: Request, res: Response) {
  try {
    const newPackage = await createPackageService(req.body);
    return res
      .status(201)
      .send({ newPackage, message: "Package created successfully" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function updatePackage(req: Request, res: Response) {
  try {
    const packageId = req.params.id;
    const editedPackage = await updatePackageService(packageId, req.body);
    return res
      .status(200)
      .send({ editedPackage, message: "Package updated successfully" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}

export async function deletePackage(req: Request, res: Response) {
  try {
    const packageId = req.params.id;
    await deletePackageService(packageId);
    return res.status(200).send({ message: "Package deleted successfully" });
  } catch (error) {
    return res.status(500).send({ message: (error as Error).message });
  }
}
