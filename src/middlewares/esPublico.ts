import { NextFunction, Request, Response } from "express";
import * as helperPostulante from "../helpers/postulante.helper"

export const esPublico = async (request:  Request, response: Response, next: NextFunction) => {
     
    let fileName = request.url.substr(request.url.lastIndexOf('/')+1);

    let id = fileName.split('.')[0];

    let postulante = await helperPostulante.get(id);

    if(postulante&&!postulante.visibilidad){
        response.status(403).json({message: "No permitido"});
    }else{
        next();
    }
}