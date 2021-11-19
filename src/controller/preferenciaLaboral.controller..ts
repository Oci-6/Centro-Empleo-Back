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
    if(validacion(body)) return res.status(400).json({message: "Valores incorrectors"})
    let postulante = await helperPostulante.get(req.params.idPostulante);
    if(!postulante) return res.status(404).json({message: "No se encontre postulante"})
    body.postulante = postulante;
    return res.status(200).json(await helperPreferenciaLaboral.save(body))

}

export const putPreferenciaLaboral = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});
    let prefLab: any = await helperPreferenciaLaboral.get(req.body.id);
    if(!prefLab) return res.status(404).json({message: "No existe Preferencia Laboral"});
    Object.assign(prefLab, req.body);
    if(validacion(prefLab)) return res.status(400).json({message: "Valores incorrectos"});
    
    return res.status(200).json(await helperPreferenciaLaboral.update(req.body))

}

export const  deletePreferenciaLaboral = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    let prefLab: any = await helperPreferenciaLaboral.get(req.params.id);
    if(!prefLab) return res.status(404).json({message: "No existe Preferencia Laboral"});

    let jwtauth = JSON.parse(req.params.jwtauth);
    if(prefLab.postulante.id!=jwtauth.usuario) return res.status(403).json({message: "No tienes los permisos"});

    return res.status(200).json(await helperPreferenciaLaboral.borrar(req.params.id))
}

const validacion = (preferenciaLaboral: PreferenciaLaboral) => {
    if (!preferenciaLaboral.puestoPreferido || typeof preferenciaLaboral.puestoPreferido != 'string') return true;
    if (!preferenciaLaboral.aspiracionSalarial || typeof preferenciaLaboral.aspiracionSalarial != 'number' || preferenciaLaboral.aspiracionSalarial < 1) return true;
    if (!preferenciaLaboral.areaInteres || typeof preferenciaLaboral.areaInteres != 'string') return true;

    return false;
}