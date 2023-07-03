import express, { Router } from "express";
import {
  deleteUser,
  editUser,
  login,
  register,
  getAllActiveDeliveries,
  getAllDeliveries
} from "../controllers/userController";
import { isDelivery } from "../middleware/validateMiddleware";
import { isAdmin } from "../middleware/validateMiddleware";

const router: Router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.put("/edit/:id", isDelivery, editUser);

router.delete("/delete/:id", isDelivery, deleteUser);

router.get("/deliveries", isAdmin, getAllDeliveries);

router.get("/deliveries/active", isAdmin, getAllActiveDeliveries);

export default router;
