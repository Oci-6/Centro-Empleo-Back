import { Router } from "express"
import * as NovedadController from "../controller/novedad.controller"
import { verifyToken } from "../middlewares/verifyToken";

const router = Router()

/*
    Rutas Pais

    http://localhost:3000/api/ofertas/
*/

router.post("/", [verifyToken], NovedadController.postNovedad);

router.get("/:id", NovedadController.getNovedad);

router.get("/", [verifyToken], NovedadController.getAll);

router.put("/", [verifyToken], NovedadController.putNovedad);

router.delete("/", [verifyToken], NovedadController.deleteNovedad);


export default router;