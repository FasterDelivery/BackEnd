import express, { Router } from "express";
import {
  createPackage,
  deletePackage,
  getAllActiveDeliveries,
  getAllDeliveries,
  getAllPackages,
  updatePackage
} from "../controllers/adminController";
const router: Router = express.Router();
import { isAdmin } from "../middleware/validateMiddleware";

router.get("/deliveries", isAdmin, getAllDeliveries);

router.get("/deliveries/active", isAdmin, getAllActiveDeliveries);

router.post("/new/package", isAdmin, createPackage);

router.get("/packages", isAdmin, getAllPackages);

router.put("/edit/package/:id", isAdmin, updatePackage);

router.delete("/delete/package/:id", isAdmin, deletePackage);

export default router;
