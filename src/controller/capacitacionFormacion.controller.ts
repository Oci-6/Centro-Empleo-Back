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
    if (validacion(body)) return res.status(400).json({ message: "Valores incorrectos" });

    let postulante = await helperPostulante.get(req.params.idPostulante);
    if(!postulante) return res.status(404).json({message: "No se encontre postulante"})
    body.postulante = postulante;
    return res.status(200).json(await helperCapacitacion.save(body))

}

export const putCapacitacion = async (req: Request, res: Response): Promise<Response> => {

    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});
    let capacitacion: any = await helperCapacitacion.get(req.body.id);
    if(!capacitacion) return res.status(404).json({message: "No existe capacitación"});
    Object.assign(capacitacion, req.body);
    if(validacion(capacitacion)) return res.status(400).json({message: "Valores incorrectos"});
    
    return res.status(200).json(await helperCapacitacion.update(req.body))

}

export const  deleteCapacitacion = async (req: Request, res: Response): Promise<Response> => {
    
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    let capacitacion: any = await helperCapacitacion.get(req.params.id);
    if(!capacitacion) return res.status(404).json({message: "No existe capacitación"});

    let jwtauth = JSON.parse(req.params.jwtauth);
    if(capacitacion.postulante.id!=jwtauth.usuario) return res.status(403).json({message: "No tienes los permisos"});
    
    return res.status(200).json(await helperCapacitacion.borrar(req.params.id))
}

const validacion = (cap: CapacitacionFormacion) => {

    if (!cap.nombre || typeof cap.nombre != 'string') return true;
    if (!cap.areaTematica || typeof cap.areaTematica != 'string') return true;
    if (!cap.institucion || typeof cap.institucion != 'string') return true;
    if (!cap.fechaInicio || cap.fechaInicio > new Date()) return true;
    if (!cap.duracion || typeof cap.duracion != 'number' || cap.duracion < 1) return true;
    if (!cap.tipoDuracion || typeof cap.tipoDuracion != 'string') return true;
    if (!cap.estado || typeof cap.estado != 'string') return true;

    return false;

}