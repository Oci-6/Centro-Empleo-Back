import { Router } from 'express';
import path from "path";
import * as DocumentoController from "../controller/documento.controller"

const router = Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
        cb(null, 'uploads');
    },
    filename: (req: any, file: any, cb: any) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }


})

const upload = multer({
    storage: storage
}).single('file');

/*
    Subida documentos postulante

    http://localhost:3000/api/upload/
*/
router.use('/documento/:idPostulante', upload, DocumentoController.postDocumento)

router.use('/documentos/:idPostulante', upload, DocumentoController.getDocumentos)

router.use('/documento/:id', upload, DocumentoController.getDocumento)


export default router;