import {Request,  Response} from 'express';
import { getRepository } from 'typeorm';
import { Pais } from '../models/Pais';
import * as helperPais from '../helpers/pais.helper';

/* ----- País Controller ----- */

export const getPaises = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json(await helperPais.getAll());
}

export const getPais = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: 'No se ingreso id'});

    let pais = await helperPais.get(req.params.id);

    if(!pais) return res.status(400).json({message: 'No existe tal país'});

    return res.status(200).json(pais);
}


