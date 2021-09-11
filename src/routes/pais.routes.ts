import { Router } from "express";
import * as PaisController from "../controller/pais.controller"

const router = Router();

// Rutas Pais

router.get("/", PaisController.getPaises);

router.get("/:id", PaisController.getPais);

export default router;