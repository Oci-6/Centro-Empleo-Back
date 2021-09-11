import { Router } from "express";
import * as AuthController from "../controller/auth.controller";

const router = Router();

// Rutas Auth

router.post("/login", AuthController.login);

export default router;