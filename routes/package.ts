import express, { Router } from "express";
import { isDelivery } from "../middleware/validateMiddleware";
import {
  editPackage,
  getAllPackages,
  selectPackages
} from "../controllers/packagesController";

const router: Router = express.Router();

router.put("/:id/select/packages", isDelivery, selectPackages);

router.put("/:idUser/edit/package/:idPackage", isDelivery, editPackage);

router.get("/:idUser/packages", isDelivery, getAllPackages);

export default router;
