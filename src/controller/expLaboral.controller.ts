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
    let postulante = await helperPostulante.get(req.params.idPostulante);
    if(!postulante) return res.status(200).json({message: "No se encontre postulante"})
    body.postulante = postulante;
    return res.status(200).json(await helperExpLaboral.save(body))

}

export const putExpLaboral = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});


    return res.status(200).json(await helperExpLaboral.update(req.body))

}

export const  deleteExpLaboral = async (req: Request, res: Response): Promise<Response> => {
    return res.send("borrado");
}
