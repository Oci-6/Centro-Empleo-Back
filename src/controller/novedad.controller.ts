import { Request, Response } from 'express';
import * as helperNovedad from '../helpers/novedad.helper';
import * as helperAdmin from '../helpers/admin.helper';
import { Novedad } from '../models/Novedad';
import { getRepository } from "typeorm";
import { encrypt } from "../libs/encriptacion"
import { limpiarArchivos } from '../libs/limpiarArchivos';

// Conocimientos informaticos Controller

export const getNovedad = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    
    let novedad = await helperNovedad.get(req.params.id);

    if(!novedad) return res.status(200).json({message: "No existe novedad"});
    
    return res.status(200).json(novedad);
}


export const getAll = async (request: Request, response: Response): Promise<Response> => {
    return response.status(200).json(await helperNovedad.getAll());
}

/*
export const getExpLaborales = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperExpLaboral.getAll(req.params.idPostulante));
}
*/

export const postNovedad = async (request: Request, response:Response): Promise<Response> => {
    // Validando data
    if (!request.body.titulo) return response.status(400).json({ message: 'Falta el titulo de la novedad' });
    if (!request.body.contenido) return response.status(400).json({ message: 'Falta el contenido de la novedad' });
    if (!request.file) return response.status(400).json({ message: 'Falta la imagen de la novedad' });

    if (request.file) request.body.imagen = "http://localhost:3000/" + request.file?.path;
    
    const { titulo, contenido, imagen } = request.body;

    const savedNovedad = await helperNovedad.save({ titulo, contenido, imagen});

    return response.status(200).json(savedNovedad);

   /* if(!req.params.idAdmin) return res.status(400).json({message: "No se ingreso admin"});

    let body: Novedad = req.body;
    let admin = await helperAdmin.get(req.params.idAdmin);
    if(!admin) return res.status(200).json({message: "No se encontro admin"})
    body.admin = admin;
    return res.status(200).json(await helperNovedad.save(body))
*/

// Crear nueva novedad
// const { titulo, contenido, imagen, fechaPublicacion, admin } = req.body;

// const savedNovedad = await helperNovedad.save({ titulo, contenido, imagen, fechaPublicacion, admin});



// return res.status(200).json(savedNovedad);

}



export const putNovedad = async (req: Request, res: Response): Promise<Response> => {

    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});

    let novedad = await helperNovedad.get(req.body.id);
    if(!novedad) return res.status(400).json({ message: 'No existe una novedad con ese id' });

    if (req.file){
        if(novedad?.imagen&&novedad?.imagen.includes("uploads")){
            let fileName = novedad?.imagen.substr(novedad?.imagen.lastIndexOf('/')+1);
            limpiarArchivos(fileName)
        }
        novedad.imagen = "http://localhost:3000/" + req.file?.path;
    } 

    novedad.titulo = req.body.titulo;
    novedad.contenido = req.body.contenido;

    console.log(novedad);
    

    return res.status(200).json(await helperNovedad.update(novedad))

}

export const  deleteNovedad = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.params);
    if (!await getRepository(Novedad).findOne({ where: { id: req.params.id } })) return res.status(400).json({ message: 'No existe una novedad con ese id' });


    return res.json(await getRepository(Novedad).delete(req.params.id));
}



//export const getPostulantes = async (request: Request, response: Response): Promise<Response> => {
//    return response.status(200).json(await helperPostulante.getAll());
//}

export const buscarNovedades = async (request: Request, response: Response): Promise<Response> => {

    console.log(request.query);
    let {query, page} = request.query;
    let result: [Novedad[], number] = await helperNovedad.search(query, 12*Number(page));
    let res = {
        novedades: result[0],
        total: result[1]
    }
    
    return response.status(200).json(res);
   
}

export const ultimasNovedades = async (request: Request, response: Response): Promise<Response> => {

    console.log(request.query);
    let result: Novedad[] = await helperNovedad.lastNews();

    return response.status(200).json(result);
   
}

