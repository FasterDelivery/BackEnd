import express, { Router } from "express";
import {
  exampleUseToken,
  login,
  register
} from "../controllers/userController";
const router: Router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/example", exampleUseToken);

export default router;
