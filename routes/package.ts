import express, { Router } from "express";
import { isAdmin, isDelivery } from "../middleware/validateMiddleware";
import {
  editPackage,
  getAllPackages,
  selectPackages,
  createPackage,
  deletePackage,
  updatePackage
} from "../controllers/packagesController";

const router: Router = express.Router();

router.put("/:id/select/packages", isDelivery, selectPackages);

router.put("/:idUser/edit/package/:idPackage", isDelivery, editPackage);

router.get("/:idUser/packages", isDelivery, getAllPackages);

router.post("/new", isAdmin, createPackage);

router.get("/", isAdmin, getAllPackages);

router.put("/edit/package/:id", isAdmin, updatePackage);

router.delete("/delete/package/:id", isAdmin, deletePackage);

export default router;
