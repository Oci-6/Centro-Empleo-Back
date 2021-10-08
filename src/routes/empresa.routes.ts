import { verifyToken } from "../middlewares/verifyToken"
import { Router } from "express";
import * as EmpresaController from "../controller/empresa.controller";
import * as OfertaController from "../controller/oferta.controller";
import { esEmpresa } from "../middlewares/esEmpresa";
import { esAdmin } from "../middlewares/esAdmin";

const router = Router();

/*
    Rutas Empresa

    http://localhost:3000/api/empresa
*/

router.get("/buscar/",  EmpresaController.buscarEmpresas);

router.post("/", EmpresaController.postEmpresa);

router.get("/ofertas", [verifyToken, esEmpresa], OfertaController.getOfertasEmpresario);

router.get("/:id", [verifyToken,esEmpresa], EmpresaController.getEmpresa);

router.get("/", [verifyToken, esAdmin], EmpresaController.getEmpresas);

router.put("/", [verifyToken,esEmpresa], EmpresaController.putEmpresa);

router.post("/send-email",[verifyToken,esEmpresa], EmpresaController.sendEmailAcceso);

export default router;