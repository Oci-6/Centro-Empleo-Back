import { NextFunction, Request, Response } from "express";
import * as helperEmpresa from "../helpers/empresa.helper"

export const esEmpresa = async (request: Request, response: Response, next: NextFunction) => {
    console.log(request.params.jwtauth);
    let jwtauth = JSON.parse(request.params.jwtauth);

    if (jwtauth.tipo && jwtauth.tipo === "Admin") {
        return next();

    }
    let empresa = await helperEmpresa.get(jwtauth.usuario);
    if (jwtauth.tipo && jwtauth.tipo === "Empresa") {
        if(empresa&&empresa.estado&&empresa.fechaExpiracion&&empresa.fechaExpiracion > new Date()){
            return next()
        }
    } 
    return response.status(403).json({ message: "No permitido" });
    
}