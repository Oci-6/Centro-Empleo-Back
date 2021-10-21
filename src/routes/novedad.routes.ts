import { Router } from "express"
import * as NovedadController from "../controller/novedad.controller"
import { upload, uploadNovedad } from "../libs/multerPostulante";
import { esAdmin } from "../middlewares/esAdmin";
import { verifyToken } from "../middlewares/verifyToken";

const router = Router()

/*
    Rutas Pais

    http://localhost:3000/api/ofertas/
*/

router.get("/buscar/",  NovedadController.buscarNovedades);

router.get("/ultimasNovedades/",  NovedadController.ultimasNovedades);

router.post("/", [verifyToken, esAdmin, uploadNovedad], NovedadController.postNovedad);

router.get("/:id", NovedadController.getNovedad);

router.get("/", [verifyToken], NovedadController.getAll);

router.put("/", [verifyToken], NovedadController.putNovedad);

router.delete("/", [verifyToken], NovedadController.deleteNovedad);


export default router;