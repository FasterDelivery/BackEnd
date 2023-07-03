import express, { Router } from "express";
const router: Router = express.Router();
import usersRouter from "./user";
import packageRouter from "./package";

router.use("/user", usersRouter);
router.use("/packages", packageRouter);
export default router;
