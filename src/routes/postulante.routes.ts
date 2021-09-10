import { verify } from '../middlewares/verifyToken';
import { Router } from 'express';
import * as PostulanteController from '../controller/postulante.controller';

const router = Router();

router.post("/", PostulanteController.postPostulante)

router.get("/:id", PostulanteController.getPostulante)

router.put("/:id", PostulanteController.putPostulante)

export default router;