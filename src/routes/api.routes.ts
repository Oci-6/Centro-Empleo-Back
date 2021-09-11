import { Router } from 'express';

//Rutas
import postulantesRoutes from './postulante.routes';
import authRoutes from './auth.routes';
import paisRoutes from './pais.routes';

const router = Router();

router.use("/postulante", postulantesRoutes)

router.use("/auth", authRoutes)

router.use("/pais", paisRoutes)

export default router;