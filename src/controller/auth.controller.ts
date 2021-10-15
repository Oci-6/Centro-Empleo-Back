import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Postulante } from "../models/Postulante";
import { compararHash, encrypt } from "../libs/encriptacion"
import * as helperPostulante from "../helpers/postulante.helper"
import * as helperUsuario from "../helpers/usuario.helper"
import { User } from "../models/User";
import jwt from "jsonwebtoken";
import { sendEmail } from "../libs/sendEmail";
import { resetTemplate } from "../libs/htmlMail";
require('dotenv').config()

/* ----- Auth Controller ----- */

export const login = async (request: Request, response: Response): Promise<Response> => {

    if (!request.body.email) return response.status(400).json({ mensaje: "No ingreso email" });
    if (!request.body.contraseña) return response.status(400).json({ mensaje: "No ingreso contraseña" });

    let { email, contraseña } = request.body;
    let user: User | undefined;

    user = await helperUsuario.getByEmail(email);

    if (!user) return response.status(400).json({ mensaje: "No existe usuario" });

    let tipo: string = user.constructor.name;

    if (await compararHash(contraseña, user.contraseña)) {
        return response.status(200).json({ usuario: user, token: jwt.sign({ usuario: user.id, tipo: tipo }, process.env.JWT_TOKEN as string), tipo: tipo });
    } else {
        return response.status(400).json({ mensaje: "Contraseña incorrecta" });
    }

}

export const signInSocial = async (request: Request, response: Response): Promise<Response> => {
    if (!request.body.email) return response.status(400).json({ mensaje: "No ingreso email" });

    let { email, tipo, foto } = request.body;
    let user: User | undefined = await helperUsuario.getByEmail(email);

    if (user) {
        return response.status(200).json({ usuario: user, token: jwt.sign({ usuario: user.id, tipo: tipo }, process.env.JWT_TOKEN as string), tipo: tipo });
    } else {
        switch (tipo) {
            case "Postulante":
                let postulante: any = await helperPostulante.save({ email, foto });
                return response.status(200).json({ usuario: postulante, token: jwt.sign({ usuario: postulante.id, tipo: tipo }, process.env.JWT_TOKEN as string), tipo: tipo });

                break;

            default:
                return response.status(400).json({ message: "Algo salio mal" });

        }
    }

}

export const recuperarContraseña = async (request: Request, response: Response): Promise<Response> => {

    if (!request.body.email) return response.status(400).json({ mensaje: "No ingreso email" });

    let email: string = request.body.email;
    let user: User | undefined;

    user = await helperUsuario.getByEmail(email);

    if (!user) return response.status(400).json({ mensaje: "No existe usuario" });

    let tipo: string = user.constructor.name;
    resetTemplate(jwt.sign({email}, process.env.JWT_TOKEN + user.contraseña as string,{expiresIn: "15m"}))
    sendEmail(email, "Recuperar contraseña",  resetTemplate(jwt.sign({email}, process.env.JWT_TOKEN + user.contraseña as string,{expiresIn: "15m"})));

    return response.status(200).json({});
    // if (await compararHash(contraseña, user.contraseña)) {
    //     return response.status(200).json({ usuario: user, token: jwt.sign({usuario: user.id, tipo: tipo}, process.env.JWT_TOKEN as string), tipo: tipo });
    // } else {
    //     return response.status(400).json({ mensaje: "Contraseña incorrecta" });
    // }

}

export const cambiarContraseña = async (request: Request, response: Response): Promise<Response> => {

    if (!request.body.token) return response.status(400).json({ mensaje: "No ingreso token" });
    if (!request.body.email) return response.status(400).json({ mensaje: "No ingreso email" });
    if (!request.body.contraseña) return response.status(400).json({ mensaje: "No ingreso contraseña" });


    let { token, email, contraseña } = request.body;

    let user: User | undefined;

    user = await helperUsuario.getByEmail(email);

    if (!user) return response.status(400).json({ mensaje: "No existe usuario" });

    try {
        var decoded = jwt.verify(token, process.env.JWT_TOKEN + user.contraseña as string)
        if (user) {
            user.contraseña = await encrypt(contraseña);
            await helperUsuario.update(user);
            return response.status(200).json({ mensaje: "Contraseña cambiada existosamente" });

        }
        return response.status(400).json({ mensaje: "No existe usuario" });

    } catch (err) {
        return response.status(400).json({ mensaje: "Token expirado" });
    }
    // jwt.verify(token, process.env.JWT_TOKEN + user.contraseña as string,async  (err: any, data: any) => {
    //     if (err) {
    //         return response.status(400).json({ mensaje: "Token expirado" });
    //     } else {
    //         if (user) {
    //             user.contraseña = await encrypt(contraseña);
    //             await helperUsuario.update(user);
    //             return response.status(200).json({ mensaje: "Contraseña cambiada existosamente" });

    //         }
    //     }
    // })
}

