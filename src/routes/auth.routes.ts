import { Router } from "express";
import * as AuthController from "../controller/auth.controller";

const router = Router();

/*
    Rutas Auth

    http://localhost:3000/api/auth
*/
router.post("/login", AuthController.login);

export default router;