import { Request, Response } from 'express';
import * as helperPreferenciaLaboral from '../helpers/preferenciaLaboral.helper';
import * as helperPostulante from '../helpers/postulante.helper';
import { PreferenciaLaboral } from '../models/PreferenciaLaboral';

// Conocimientos informaticos Controller

export const getPreferenciaLaboral = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    
    let preferenciaLaboral = await helperPreferenciaLaboral.get(req.params.id);

    if(!preferenciaLaboral) return res.status(200).json({message: "No existe PreferenciaLaboral"});

    return res.status(200).json(PreferenciaLaboral);
}

export const getPreferenciaLaborales = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperPreferenciaLaboral.getAll(req.params.idPostulante));
}

export const postPreferenciaLaboral = async (req: Request, res:Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso postulante"});

    let body: PreferenciaLaboral = req.body;
    let postulante = await helperPostulante.get(req.params.idPostulante);
    if(!postulante) return res.status(200).json({message: "No se encontre postulante"})
    body.postulante = postulante;
    return res.status(200).json(await helperPreferenciaLaboral.save(body))

}

export const putPreferenciaLaboral = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});


    return res.status(200).json(await helperPreferenciaLaboral.update(req.body))

}

export const  deletePreferenciaLaboral = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperPreferenciaLaboral.borrar(req.params.id))
}
