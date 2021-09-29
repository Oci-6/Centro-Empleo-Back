import {Request,  Response} from 'express';
import { getRepository } from 'typeorm';
import { Departamento } from '../models/Departamento';
import * as helperDepartamento from '../helpers/departamento.helper';

/* ----- País Controller ----- */

export const getDepartamentos = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.paisId) return res.status(400).json({message: 'No se ingreso id pais'});

    return res.status(200).json(await helperDepartamento.getAll(req.params.paisId));
}

export const getDepartamento = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: 'No se ingreso id'});

    let departamento = await helperDepartamento.get(req.params.id);

    if(!departamento) return res.status(400).json({message: 'No existe tal departamento'});

    return res.status(200).json(departamento);
}


