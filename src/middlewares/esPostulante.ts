import { NextFunction, Request, Response } from "express";

export const esPostulante = async (request:  Request, response: Response, next: NextFunction) => {
    console.log(request.params.jwtauth);
    let jwtauth = JSON.parse(request.params.jwtauth);

    if(jwtauth.tipo&& jwtauth.tipo === "Postulante"){
        next();
        
    }else{
        response.status(403).json({message: "No permitido"});
    }
}