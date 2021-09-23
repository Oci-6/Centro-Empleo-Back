import { verifyToken } from '../middlewares/verifyToken';
import { Router } from 'express';
import * as PostulanteController from '../controller/postulante.controller';
import * as CapacitacionController from '../controller/capacitacionFormacion.controller';
import * as  ConocimientoInfoController from '../controller/conocimientoInfo.controller';
import * as  IdiomaController from '../controller/idioma.controller';
import * as  ExpLaboralController from '../controller/expLaboral.controller';
import * as  PermisosLicenciasController from '../controller/permisosLicencias.controller';
import * as  PreferenciaLaboralController from '../controller/preferenciaLaboral.controller.';
import { esPostulante } from '../middlewares/esPostulante';
import { esEmpresa } from '../middlewares/esEmpresa';
import { upload } from '../libs/multerPostulante';
import { esPublico } from '../middlewares/esPublico';

/*
    Rutas Postulante

    http://localhost:3000/api/postulante
*/

const router = Router();

router.post("/",  PostulanteController.postPostulante)

router.get("/:id", [verifyToken], PostulanteController.getPostulante)

router.get("/", [verifyToken], PostulanteController.getPostulantes)

router.put("/", [verifyToken,esPostulante],PostulanteController.putPostulante)

router.post("/foto",  [verifyToken,esPostulante,upload], PostulanteController.postFoto)

router.post("/postularse/:idOferta",  [verifyToken,esPostulante], PostulanteController.postularse)

//Capacitaciones y cursos
router.get("/capacitacion/:id",  [verifyToken,esPostulante], CapacitacionController.getCapacitacion)

router.get("/capacitaciones/:idPostulante", [verifyToken,esPostulante],CapacitacionController.getCapacitaciones)

router.post("/capacitacion/:idPostulante", [verifyToken,esPostulante],CapacitacionController.postCapacitacion)

router.put("/capacitacion/",[verifyToken,esPostulante], CapacitacionController.putCapacitacion)

router.delete("/capacitacion/",[verifyToken,esPostulante], CapacitacionController.deleteCapacitacion)

//Conocimientos Informaticos
router.get("/conocimientoInfo/:id",[verifyToken,esPostulante], ConocimientoInfoController.getConocimientoInfo)

router.get("/conocimientoInfos/:idPostulante",[verifyToken,esPostulante], ConocimientoInfoController.getConocimientoInfos)

router.post("/conocimientoInfo/:idPostulante",[verifyToken,esPostulante], ConocimientoInfoController.postConocimientoInfo)

router.put("/conocimientoInfo/",[verifyToken,esPostulante], ConocimientoInfoController.putConocimientoInfo)

router.delete("/conocimientoInfo/",[verifyToken,esPostulante], ConocimientoInfoController.deleteConocimientoInfo)

//Idioma
router.get("/idioma/:id",[verifyToken,esPostulante], IdiomaController.getIdioma)

router.get("/idiomas/:idPostulante",[verifyToken,esPostulante], IdiomaController.getIdiomas)

router.post("/idioma/:idPostulante",[verifyToken,esPostulante], IdiomaController.postIdioma)

router.put("/idioma/",[verifyToken,esPostulante], IdiomaController.putIdioma)

router.delete("/idioma/",[verifyToken,esPostulante], IdiomaController.deleteIdioma)

//Experiencia laboral
router.get("/expLaboral/:id",[verifyToken,esPostulante], ExpLaboralController.getExpLaboral)

router.get("/expLaborales/:idPostulante",[verifyToken,esPostulante], ExpLaboralController.getExpLaborales)

router.post("/expLaboral/:idPostulante",[verifyToken,esPostulante], ExpLaboralController.postExpLaboral)

router.put("/expLaboral/",[verifyToken,esPostulante], ExpLaboralController.putExpLaboral)

router.delete("/expLaboral/",[verifyToken,esPostulante], ExpLaboralController.deleteExpLaboral)

//Permisos y licencias
router.get("/permisosLicencia/:id",[verifyToken,esPostulante], PermisosLicenciasController.getPermisosLicencia)

router.get("/permisosLicencias/:idPostulante",[verifyToken,esPostulante], PermisosLicenciasController.getPermisosLicencias)

router.post("/permisosLicencia/:idPostulante",[verifyToken,esPostulante], PermisosLicenciasController.postPermisosLicencia)

router.put("/permisosLicencia/",[verifyToken,esPostulante], PermisosLicenciasController.putPermisosLicencia)

router.delete("/permisosLicencia/",[verifyToken,esPostulante], PermisosLicenciasController.deletePermisosLicencia)

//Preferencia Laboral
router.get("/preferenciaLaboral/:id", [verifyToken,esPostulante], PreferenciaLaboralController.getPreferenciaLaboral)

router.get("/preferenciaLaborales/:idPostulante", [verifyToken,esPostulante], PreferenciaLaboralController.getPreferenciaLaborales)

router.post("/preferenciaLaboral/:idPostulante", [verifyToken,esPostulante], PreferenciaLaboralController.postPreferenciaLaboral)

router.put("/preferenciaLaboral/", [verifyToken,esPostulante], PreferenciaLaboralController.putPreferenciaLaboral)

router.delete("/preferenciaLaboral/", [verifyToken,esPostulante], PreferenciaLaboralController.deletePreferenciaLaboral)

export default router;