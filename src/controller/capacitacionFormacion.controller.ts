import { Request, Response } from 'express';
import * as helperCapacitacion from '../helpers/capacitacionFormacion.helper';
import * as helperPostulante from '../helpers/postulante.helper';
import { CapacitacionFormacion } from '../models/CapacitacionFormacion';
import { Postulante } from '../models/Postulante';

// Capacitacion Controller

export const getCapacitacion = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    
    let capacitacion = await helperCapacitacion.get(req.params.id);

    if(!capacitacion) return res.status(200).json({message: "No existe capacitacion"});

    return res.status(200).json(capacitacion);
}

export const getCapacitaciones = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperCapacitacion.getAll(req.params.idPostulante));
}

export const postCapacitacion = async (req: Request, res:Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso postulante"});

    let body: CapacitacionFormacion = req.body;
    let postulante = await helperPostulante.get(req.params.idPostulante);
    if(!postulante) return res.status(200).json({message: "No se encontre postulante"})
    body.postulante = postulante;
    return res.status(200).json(await helperCapacitacion.save(body))

}

export const putCapacitacion = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});


    return res.status(200).json(await helperCapacitacion.update(req.body))

}

export const  deleteCapacitacion = async (req: Request, res: Response): Promise<Response> => {
    return res.send("borrado");
}
