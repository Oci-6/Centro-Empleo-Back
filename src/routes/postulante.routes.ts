import { verify } from '../middlewares/verifyToken';
import { Router } from 'express';
import * as PostulanteController from '../controller/postulante.controller';
import * as CapacitacionController from '../controller/capacitacionFormacion.controller';
import * as  ConocimientoInfoController from '../controller/conocimientoInfo.controller';
import * as  IdiomaController from '../controller/idioma.controller';

const router = Router();

router.post("/", PostulanteController.postPostulante)

router.get("/:id", PostulanteController.getPostulante)

router.put("/", PostulanteController.putPostulante)

//Capacitaciones y cursos
router.get("/capacitacion/:id", CapacitacionController.getCapacitacion)

router.get("/capacitaciones/:idPostulante", CapacitacionController.getCapacitaciones)

router.post("/capacitacion/:idPostulante", CapacitacionController.postCapacitacion)

router.put("/capacitacion/", CapacitacionController.putCapacitacion)

router.delete("/capacitacion/", CapacitacionController.deleteCapacitacion)

//Conocimientos Informaticos
router.get("/conocimientoInfo/:id", ConocimientoInfoController.getConocimientoInfo)

router.get("/conocimientoInfos/:idPostulante", ConocimientoInfoController.getConocimientoInfos)

router.post("/conocimientoInfo/:idPostulante", ConocimientoInfoController.postConocimientoInfo)

router.put("/conocimientoInfo/", ConocimientoInfoController.putConocimientoInfo)

router.delete("/conocimientoInfo/", ConocimientoInfoController.deleteConocimientoInfo)

//Idioma
router.get("/idioma/:id", IdiomaController.getIdioma)

router.get("/idioma/:idPostulante", IdiomaController.getIdiomas)

router.post("/idioma/:idPostulante", IdiomaController.postIdioma)

router.put("/idioma/", IdiomaController.putIdioma)

router.delete("/idioma/", IdiomaController.deleteIdioma)

export default router;