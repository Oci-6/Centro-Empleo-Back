import { verify } from '../middlewares/verifyToken';
import { Router } from 'express';
import * as PostulanteController from '../controller/postulante.controller';
import * as CapacitacionController from '../controller/capacitacionFormacion.controller';
import * as  ConocimientoInfoController from '../controller/conocimientoInfo.controller';
import * as  IdiomaController from '../controller/idioma.controller';
import * as  ExpLaboralController from '../controller/expLaboral.controller';
import * as  PermisosLicenciasController from '../controller/permisosLicencias.controller';
import * as  PreferenciaLaboralController from '../controller/preferenciaLaboral.controller.';
import { esPostulante } from '../middlewares/esPostulante';

/*
    Rutas Postulante

    http://localhost:3000/api/postulante
*/

const router = Router();

router.post("/", PostulanteController.postPostulante)

router.get("/:id", PostulanteController.getPostulante)

router.get("/", PostulanteController.getPostulantes)

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

router.get("/idiomas/:idPostulante", IdiomaController.getIdiomas)

router.post("/idioma/:idPostulante", IdiomaController.postIdioma)

router.put("/idioma/", IdiomaController.putIdioma)

router.delete("/idioma/", IdiomaController.deleteIdioma)

//Experiencia laboral
router.get("/expLaboral/:id", ExpLaboralController.getExpLaboral)

router.get("/expLaborales/:idPostulante", ExpLaboralController.getExpLaborales)

router.post("/expLaboral/:idPostulante", ExpLaboralController.postExpLaboral)

router.put("/expLaboral/", ExpLaboralController.putExpLaboral)

router.delete("/expLaboral/", ExpLaboralController.deleteExpLaboral)

//Permisos y licencias
router.get("/permisosLicencia/:id", PermisosLicenciasController.getPermisosLicencia)

router.get("/permisosLicencias/:idPostulante", PermisosLicenciasController.getPermisosLicencias)

router.post("/permisosLicencia/:idPostulante", PermisosLicenciasController.postPermisosLicencia)

router.put("/permisosLicencia/", PermisosLicenciasController.putPermisosLicencia)

router.delete("/permisosLicencia/", PermisosLicenciasController.deletePermisosLicencia)

//Preferencia Laboral
router.get("/preferenciaLaboral/:id", PreferenciaLaboralController.getPreferenciaLaboral)

router.get("/preferenciaLaborales/:idPostulante", PreferenciaLaboralController.getPreferenciaLaborales)

router.post("/preferenciaLaboral/:idPostulante", PreferenciaLaboralController.postPreferenciaLaboral)

router.put("/preferenciaLaboral/", PreferenciaLaboralController.putPreferenciaLaboral)

router.delete("/preferenciaLaboral/", PreferenciaLaboralController.deletePreferenciaLaboral)

export default router;