import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Postulante } from "../models/Postulante";
import { compararHash, encrypt } from "../libs/encriptacion"
import { User } from "../models/User";
import jwt from "jsonwebtoken";
require('dotenv').config()

/* ----- Auth Controller ----- */

export const login = async (request: Request, response: Response): Promise<Response> => {

    if(!request.body.email) return response.status(400).json({mensaje: "No ingreso email"});
    if(!request.body.contraseña) return response.status(400).json({mensaje: "No ingreso contraseña"});

    let {email, contraseña} = request.body;

    let user: User| undefined;

    user = await getRepository(Postulante).findOne({where: {email}, select: [ 'contraseña', 'id']})
    
    if(!user) return response.status(200).json({mensaje: "No existe usuario"});

    if(await compararHash(contraseña, user.contraseña)){
        return response.status(200).json({usuario: await getRepository(Postulante).findOne({where: {email}, select: [ 'contraseña', 'id']}), token: jwt.sign (user.id.toString(), process.env.JWT_TOKEN as string)});
    }else{
        return response.status(400).json({mensaje: "Contraseña incorrecta"});
    }

}
