import { Router } from "express"
import * as OfertaController from "../controller/oferta.controller"
import { esEmpresa } from "../middlewares/esEmpresa";
import { verifyToken } from "../middlewares/verifyToken";

const router = Router()

/*
    Rutas Pais

    http://localhost:3000/api/ofertas/
*/

router.get("/buscar/",  OfertaController.buscarOfertas);

router.post("/", [verifyToken, esEmpresa], OfertaController.postOferta);

router.get("/:id", OfertaController.getOferta);

router.get("/", [verifyToken, esEmpresa], OfertaController.getOfertas);

router.put("/", [verifyToken, esEmpresa], OfertaController.putOferta);

router.delete("/:id", [verifyToken, esEmpresa], OfertaController.deleteOferta);


export default router;