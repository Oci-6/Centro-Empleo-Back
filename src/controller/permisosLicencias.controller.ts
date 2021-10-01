import { Request, Response } from 'express';
import * as helperPermisosLicencias from '../helpers/permisosLicencias.helper';
import * as helperPostulante from '../helpers/postulante.helper';
import { PermisosLicencias } from '../models/PermisosLicencias';

// Conocimientos informaticos Controller

export const getPermisosLicencia = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    
    let permisosLicencias = await helperPermisosLicencias.get(req.params.id);

    if(!permisosLicencias) return res.status(200).json({message: "No existe PermisosLicencias"});

    return res.status(200).json(PermisosLicencias);
}

export const getPermisosLicencias = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperPermisosLicencias.getAll(req.params.idPostulante));
}

export const postPermisosLicencia = async (req: Request, res:Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso postulante"});

    let body: PermisosLicencias = req.body;
    let postulante = await helperPostulante.get(req.params.idPostulante);
    if(!postulante) return res.status(200).json({message: "No se encontre postulante"})
    body.postulante = postulante;
    return res.status(200).json(await helperPermisosLicencias.save(body))

}

export const putPermisosLicencia = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});


    return res.status(200).json(await helperPermisosLicencias.update(req.body))

}

export const  deletePermisosLicencia = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperPermisosLicencias.borrar(req.params.id))
}
