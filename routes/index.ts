import express, { Router } from "express";
import {
  exampleGenerateToken,
  exampleValidateToken,
} from "../controllers/index";

const router: Router = express.Router();

router.post("/example", exampleGenerateToken);

router.get("/", exampleValidateToken);

export default router;
