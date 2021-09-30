import { NextFunction, Request, Response } from "express";

export const esAdmin = async (request:  Request, response: Response, next: NextFunction) => {
    
    let jwtauth = JSON.parse(request.params.jwtauth);

    if(jwtauth.tipo&& jwtauth.tipo === "Admin"){
        return next();
        
    }else{
        response.status(403).json({message: "No permitido"});
    }
}