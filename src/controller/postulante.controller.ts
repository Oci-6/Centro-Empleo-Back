import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Postulante } from "../models/Postulante";
import { encrypt } from "../libs/encriptacion"
import * as helperPostulante from "../helpers/postulante.helper"
import { User } from "../models/User";

/* ----- Postulante Controller ----- */

export const postPostulante = async (request: Request, response: Response): Promise<Response> => {
    // Validando data
    if (!request.body.email) return response.status(400).json({ message: 'Falta el email del usuario' });
    if (!request.body.contraseña) return response.status(400).json({ message: 'Falta la contraseña del usuario' });
    
    const { email, contraseña} = request.body;

    //Validando email único
    let postulante = await getRepository(Postulante).findOne({where: {email}, select: [ 'contraseña', 'id']})
    if (postulante) return response.status(400).json({ message: 'Ya existe un usuario con el email ingresado' });
    
    // Crear nuevo postulante
    const savedPostulante= await helperPostulante.save({ email, contraseña: await encrypt(contraseña) });

    return response.status(200).json(savedPostulante);
}

export const getPostulante = async (request: Request, response: Response): Promise<Response> => {
    if (!request.params.id) return response.status(400).json({ message: 'No se ingreso id' });

    let postulante = await helperPostulante.get(request.params.id);

    if(!postulante) return response.status(400).json({ message: 'No existe postulante' });

    return response.status(200).json(postulante);
}

export const getPostulantes = async (request: Request, response: Response): Promise<Response> => {
    return response.status(200).json(await helperPostulante.getAll());
}

export const putPostulante = async (request: Request, response: Response): Promise<Response> => { 
    if (!request.body.id) return response.status(400).json({ message: 'No se ingreso id' });
    if (request.body.email&&helperPostulante.getByEmail(request.body.email)) return response.status(400).json({ message: 'Email ya existe' });
    if (request.body.cedula&&helperPostulante.getByDocumento(request.body.documento)) return response.status(400).json({ message: 'Cedula ya existe' });


    if(!await helperPostulante.get(request.params.id)) return response.status(400).json({ message: 'No se encontro usuario' });
    return response.status(200).json(await helperPostulante.update(request.body));
}
