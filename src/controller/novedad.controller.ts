import { Request, Response } from 'express';
import * as helperNovedad from '../helpers/novedad.helper';
import * as helperAdmin from '../helpers/admin.helper';
import { Novedad } from '../models/Novedad';
import { getRepository } from "typeorm";
import { encrypt } from "../libs/encriptacion"

// Conocimientos informaticos Controller

export const getNovedad = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    
    let novedad = await helperNovedad.get(req.params.id);

    if(!novedad) return res.status(200).json({message: "No existe novedad"});

    return res.status(200).json(Novedad);
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

export const postNovedad = async (req: Request, res:Response): Promise<Response> => {
   /* if(!req.params.idAdmin) return res.status(400).json({message: "No se ingreso admin"});

    let body: Novedad = req.body;
    let admin = await helperAdmin.get(req.params.idAdmin);
    if(!admin) return res.status(200).json({message: "No se encontro admin"})
    body.admin = admin;
    return res.status(200).json(await helperNovedad.save(body))
*/
// Crear nueva novedad
const { titulo, contenido, imagen } = req.body;

const savedNovedad = await helperNovedad.save({ titulo, contenido, imagen});

return res.status(200).json(savedNovedad);

}



export const putNovedad = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});


    return res.status(200).json(await helperNovedad.update(req.body))

}

export const  deleteNovedad = async (req: Request, res: Response): Promise<Response> => {
    return res.send("borrado");
}



//export const getPostulantes = async (request: Request, response: Response): Promise<Response> => {
//    return response.status(200).json(await helperPostulante.getAll());
//}
