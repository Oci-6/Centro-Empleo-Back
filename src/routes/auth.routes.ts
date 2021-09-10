import { Router } from "express";
import * as AuthController from "../controller/auth.controller";

const router = Router();

router.post("/login", AuthController.login);

export default router;