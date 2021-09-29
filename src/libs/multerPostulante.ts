import path from "path";

const multer = require('multer');

const storagePostulante = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
        
        switch(file.mimetype){
            case 'application/pdf':
                cb(null, 'uploads/postulantes/documentos');
                break;
            case 'image/jpeg':
                cb(null, 'uploads/postulantes/imagenes');
                break;
            default:
                cb(null, 'uploads');
                break;

        }
    },
    filename: (req: any, file: any, cb: any) => {
        cb(null, JSON.parse(req.params.jwtauth).usuario +"."+ Date.now() + path.extname(file.originalname));
    }


})

export const upload = multer({
    storage: storagePostulante
}).single('file');
