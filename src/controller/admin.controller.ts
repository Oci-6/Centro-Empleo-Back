import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Admin } from "../models/Admin";
import { encrypt } from "../libs/encriptacion"
import * as helperAdmin from "../helpers/admin.helper"

/* ----- Postulante Controller ----- */

export const postAdmin = async (request: Request, response: Response): Promise<Response> => {
    // Validando data
    if (!request.body.email) return response.status(400).json({ message: 'Falta el email del usuario' });
    if (!request.body.contraseña) return response.status(400).json({ message: 'Falta la contraseña del usuario' });

    const { email, contraseña } = request.body;

    //Validando email 
    let admin = await getRepository(Admin).findOne({ where: { email }, select: ['contraseña', 'id'] })
    if (admin) return response.status(400).json({ message: 'Ya existe un usuario con el email ingresado' });

    // Crear nuevo admin
    const savedAdmin = await helperAdmin.save({ email, contraseña: await encrypt(contraseña) });

    return response.status(200).json(savedAdmin);
}

export const getAdmin = async (request: Request, response: Response): Promise<Response> => {
    if (!request.params.id) return response.status(400).json({ message: 'No se ingreso id' });

    let admin = await helperAdmin.get(request.params.id);

    if (!admin) return response.status(400).json({ message: 'No existe admin' });

    return response.status(200).json(admin);
}

export const getAllAdmin = async (request: Request, response: Response): Promise<Response> => {
    return response.status(200).json(await helperAdmin.getAll());
}

export const putAdmin = async (request: Request, response: Response): Promise<Response> => {
    if (!request.body.id) return response.status(400).json({ message: 'No se ingreso id' });
    if (request.body.email && helperAdmin.getByEmail(request.body.email)) return response.status(400).json({ message: 'Email ya existe' });


    if (!await helperAdmin.get(request.body.id)) return response.status(400).json({ message: 'No se encontro usuario' });

    let admin: Admin = request.body;

    
    return response.status(200).json(await helperAdmin.update(admin));
}


export const getStats = async (request: Request, response: Response): Promise<Response> => {
    let {fechaInicio,fechaFin} =request.query
    

    return response.status(200).json(await helperAdmin.data(fechaInicio as string,fechaFin as string));
}

