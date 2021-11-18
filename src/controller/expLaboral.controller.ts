import { Request, Response } from 'express';
import * as helperExpLaboral from '../helpers/expLaboral.helper';
import * as helperPostulante from '../helpers/postulante.helper';
import { ExpLaboral } from '../models/ExpLaboral';

// Conocimientos informaticos Controller

export const getExpLaboral = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    
    let expLaboral = await helperExpLaboral.get(req.params.id);

    if(!expLaboral) return res.status(200).json({message: "No existe ExpLaboral"});

    return res.status(200).json(ExpLaboral);
}

export const getExpLaborales = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperExpLaboral.getAll(req.params.idPostulante));
}

export const postExpLaboral = async (req: Request, res:Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso postulante"});

    let body: ExpLaboral = req.body;
    if(validacion(body)) return res.status(400).json({message: "Valores incorrectos"})
    let postulante = await helperPostulante.get(req.params.idPostulante);
    if(!postulante) return res.status(404).json({message: "No se encontre postulante"})
    body.postulante = postulante;
    return res.status(200).json(await helperExpLaboral.save(body))

}

export const putExpLaboral = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});


    return res.status(200).json(await helperExpLaboral.update(req.body))

}

export const  deleteExpLaboral = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperExpLaboral.borrar(req.params.id))
}

const validacion = (expLaboral: ExpLaboral) => {
    if (!expLaboral.nombreEmp || typeof expLaboral.nombreEmp != 'string') return true;
    if (!expLaboral.cargo || typeof expLaboral.cargo != 'string') return true;
    if (!expLaboral.area || typeof expLaboral.area != 'string') return true;
    if (!expLaboral.nivelJer || typeof expLaboral.nivelJer != 'string') return true;
    if (!expLaboral.tareas || typeof expLaboral.tareas != 'string') return true;
    if (!expLaboral.fechaFin || expLaboral.fechaFin > new Date()) return true;
    if (!expLaboral.fechaInicio || expLaboral.fechaInicio > new Date() || expLaboral.fechaInicio > expLaboral.fechaFin) return true;
    if (typeof expLaboral.trabajando === 'undefined'|| typeof expLaboral.trabajando != 'boolean') return true;
    if (!expLaboral.nombreRef || typeof expLaboral.nombreRef != 'string') return true;
    if (!expLaboral.apellidoRef || typeof expLaboral.apellidoRef != 'string') return true;
    if (!expLaboral.cargoRef || typeof expLaboral.cargoRef != 'string') return true;
    if (!expLaboral.telefonoRef || typeof expLaboral.telefonoRef != 'string' || (expLaboral.telefonoRef.length != 8 && expLaboral.telefonoRef.length !=12&&expLaboral.telefonoRef.length !=9)) return true;
    if (!expLaboral.emailRef || typeof expLaboral.emailRef != 'string'|| !expLaboral.emailRef.includes('@')) return true;

    return false;

}