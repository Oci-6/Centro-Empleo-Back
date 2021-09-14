import { NextFunction, Request, Response } from "express";

export const esPostulante = async (request:  Request, response: Response, next: NextFunction) => {
    let jwtauth = JSON.parse(request.params.jwtauth);

    if(jwtauth.tipo&& jwtauth.tipo === "Postulante"){
        console.log("Postulante");
        next();
        
    }else{
        response.status(403).json({message: "No permitido"});
    }
}