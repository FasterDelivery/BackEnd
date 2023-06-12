import express, { Router } from "express";
const router: Router = express.Router();
import usersRouter from "./user";

router.use("/user", usersRouter);

export default router;
