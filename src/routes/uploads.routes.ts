import { Router } from 'express';
import path from "path";

const router = Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination:  (req: any, file: any, cb: any) => {
        cb(null, 'uploads');
    },
    filename: (req: any, file: any, cb: any) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }


})

const upload = multer({
    storage: storage
}).single('image');


router.post('/api/upload', upload, (req ,res) =>{
    console.log(req.file);
    return res.send("uploaded");
})


module.exports = router;