import { Router } from 'express';

//Rutas
import postulantesRoutes from './postulante.routes';
import authRoutes from './auth.routes';

const router = Router();

router.use("/postulante", postulantesRoutes)

router.use("/auth", authRoutes)

export default router;