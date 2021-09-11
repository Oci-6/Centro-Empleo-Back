import { Router } from 'express';
import path from "path";
import * as helperPostulante from "../helpers/postulante.helper"
import * as helperDocumento from "../helpers/documento.helper"

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
}).single('image');


router.post('/:idPostulante', upload, async (req, res) => {
    if (!req.params.idPostulante) return res.status(400).json({ message: "No se ingreso postulante" });

    let postulante = await helperPostulante.get(req.params.idPostulante);
    if (!postulante) return res.status(400).json({ message: "No existe postulante" });

    let documento = {
        tipo: req.body.tipo,
        ubicacion: req.file?.path,
        postulante: postulante
    }

    await helperDocumento.save(documento);

    console.log(req.file);
    return res.send("uploaded");
})


export default router;