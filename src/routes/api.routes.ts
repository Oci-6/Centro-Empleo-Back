import { Router } from 'express';

//Rutas
import postulantesRoutes from './postulante.routes';
import authRoutes from './auth.routes';
import paisRoutes from './pais.routes';
import uploadRoutes from './uploads.routes';
import empresaRoutes from './empresa.routes';
import ofertasRoutes from './ofertas.routes';

const router = Router();
/*
    Rutas 

    http://localhost:3000/api
*/
router.use("/postulante", postulantesRoutes)

router.use("/auth", authRoutes)

router.use("/pais", paisRoutes)

router.use("/upload", uploadRoutes)

router.use("/empresa", empresaRoutes)

router.use("/ofertas", ofertasRoutes)

export default router;