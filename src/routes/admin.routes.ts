import { verifyToken } from "../middlewares/verifyToken"
import { Router } from "express";
import * as EmpresaController from "../controller/empresa.controller";
import * as AdminController from "../controller/admin.controller";
import { esAdmin } from "../middlewares/esAdmin";

const router = Router();

/*
    Rutas Admin

    http://localhost:3000/api/admin
*/
router.put("/habilitar",[verifyToken, esAdmin], EmpresaController.habilitarEmpresa);

router.get("/datos",[verifyToken, esAdmin], AdminController.getStats);

router.get("/enviarOferta/:id",[verifyToken, esAdmin], AdminController.compartirOferta);

router.get("/enviarNovedad/:id",[verifyToken, esAdmin], AdminController.compartirNovedad);

export default router;