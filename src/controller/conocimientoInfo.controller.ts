import { Request, Response } from 'express';
import * as helperConocimientoInfo from '../helpers/conocimientoInfo.helper';
import * as helperPostulante from '../helpers/postulante.helper';
import { ConocimientoInfo } from '../models/ConocimientoInfo';

// Conocimientos informaticos Controller

export const getConocimientoInfo = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    
    let conocimientoInfo = await helperConocimientoInfo.get(req.params.id);

    if(!conocimientoInfo) return res.status(200).json({message: "No existe ConocimientoInfo"});

    return res.status(200).json(conocimientoInfo);
}

export const getConocimientoInfos = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperConocimientoInfo.getAll(req.params.idPostulante));
}

export const postConocimientoInfo = async (req: Request, res:Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso postulante"});

    let body: ConocimientoInfo = req.body;

    if(validacion(body)) return res.status(400).json({message: "Valores incorrectos" })

    let postulante = await helperPostulante.get(req.params.idPostulante);
    if(!postulante) return res.status(404).json({message: "No se encontre postulante"})
    body.postulante = postulante;
    return res.status(200).json(await helperConocimientoInfo.save(body))

}

export const putConocimientoInfo = async (req: Request, res: Response): Promise<Response> => {

    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});
    let conInfo: any = await helperConocimientoInfo.get(req.body.id);
    if(!conInfo) return res.status(404).json({message: "No existe Conocimiento Informático"});
    Object.assign(conInfo, req.body);
    if(validacion(conInfo)) return res.status(400).json({message: "Valores incorrectos"});
    
    return res.status(200).json(await helperConocimientoInfo.update(req.body))

}

export const  deleteConocimientoInfo = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    let conInfo: any = await helperConocimientoInfo.get(req.params.id);
    if(!conInfo) return res.status(404).json({message: "No existe Conocimiento Informático"});

    let jwtauth = JSON.parse(req.params.jwtauth);
    if(conInfo.postulante.id!=jwtauth.usuario) return res.status(403).json({message: "No tienes los permisos"});

    return res.status(200).json(await helperConocimientoInfo.borrar(req.params.id))
}

const validacion = (info: ConocimientoInfo) => {

    if (!info.nombreApp || typeof info.nombreApp != 'string') return true;
    if (!info.categoria || typeof info.categoria != 'string') return true;
    if (!info.nivelConocimiento || typeof info.nivelConocimiento != 'string') return true;

    return false;

}
