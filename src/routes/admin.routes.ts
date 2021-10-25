import { verifyToken } from "../middlewares/verifyToken"
import { Router } from "express";
import * as EmpresaController from "../controller/empresa.controller";
import * as AdminController from "../controller/admin.controller";
import { esAdmin } from "../middlewares/esAdmin";

const router = Router();

/*
    Rutas Empresa

    http://localhost:3000/api/empresa
*/
router.put("/habilitar",[verifyToken, esAdmin], EmpresaController.habilitarEmpresa);

router.get("/datos",[verifyToken, esAdmin], AdminController.getStats);

export default router;