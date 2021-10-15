import { Router } from 'express';

//Rutas
import postulantesRoutes from './postulante.routes';
import authRoutes from './auth.routes';
import paisRoutes from './pais.routes';
import empresaRoutes from './empresa.routes';
import ofertasRoutes from './ofertas.routes';
import adminRoutes from './admin.routes';
import novedadesRoutes from './novedad.routes';

const router = Router();
/*
    Rutas 

    http://localhost:3000/api
*/
router.use("/postulante", postulantesRoutes)

router.use("/auth", authRoutes)

router.use("/pais", paisRoutes)

router.use("/empresa", empresaRoutes)

router.use("/ofertas", ofertasRoutes)

router.use("/admin", adminRoutes)
router.use("/novedad", novedadesRoutes)

export default router;