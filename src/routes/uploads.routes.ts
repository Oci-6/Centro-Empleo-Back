import { verifyToken} from '../middlewares/verifyToken';
import { Router } from 'express';
import * as DocumentoController from "../controller/documento.controller"
import { esPostulante } from '../middlewares/esPostulante';
import { upload } from '../libs/multerPostulante';

const router = Router();
const multer = require('multer');



/*
    Subida documentos postulante

    http://localhost:3000/api/upload/
*/
router.post('/documento/:idPostulante', [verifyToken, esPostulante, upload], DocumentoController.postDocumento)

router.get('/documentos/:idPostulante', [verifyToken, esPostulante], DocumentoController.getDocumentos)

router.get('/documento/:id', [verifyToken, esPostulante],  DocumentoController.getDocumento)


export default router;