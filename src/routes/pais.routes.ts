import { Router } from "express";
import * as PaisController from "../controller/pais.controller"
import * as DepartamentoController from "../controller/departamento.controller"
import * as LocalidadController from "../controller/localidad.controller"

const router = Router();

/*
    Rutas Pais

    http://localhost:3000/api/pais
*/

router.get("/", PaisController.getPaises);

router.get("/:id", PaisController.getPais);


router.get("/departamentos/:paisId", DepartamentoController.getDepartamentos);

router.get("/departamento/:id", DepartamentoController.getDepartamento);


router.get("/departamento/localidades/:departamentoId", LocalidadController.getLocalidades);

router.get("/departamento/localidad/:id", LocalidadController.getLocalidad);
export default router;