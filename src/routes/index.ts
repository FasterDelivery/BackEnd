import express, { Router } from "express";
import { exampleGenerateToken } from "../controllers";
import { exampleValidateToken } from "../controllers";

const router: Router = express.Router();

router.post("/example", exampleGenerateToken);

router.get("/", exampleValidateToken);

export default router;
