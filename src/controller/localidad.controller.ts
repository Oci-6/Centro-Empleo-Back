import {Request,  Response} from 'express';
import { getRepository } from 'typeorm';
import { Localidad } from '../models/Localidad';
import * as helperLocalidad from '../helpers/localidad.helper';

/* ----- País Controller ----- */

export const getLocalidades = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.departamentoId) return res.status(400).json({message: 'No se ingreso id departamento'});

    return res.status(200).json(await helperLocalidad.getAll(req.params.departamentoId));
}

export const getLocalidad = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: 'No se ingreso id'});

    let localidad = await helperLocalidad.get(req.params.id);

    if(!localidad) return res.status(400).json({message: 'No existe tal Localidad'});

    return res.status(200).json(localidad);
}


