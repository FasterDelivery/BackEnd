import express, { Router } from "express";
const router: Router = express.Router();
import usersRouter from "./user";
import adminRouter from "./admin";

router.use("/user", usersRouter);
router.use("/admin", adminRouter);
export default router;
