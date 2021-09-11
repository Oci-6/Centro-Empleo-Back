import jwt from 'jsonwebtoken';
import {NextFunction, Request, Response} from 'express';
require('dotenv').config()

export const verify = async (request: Request, response: Response, next: NextFunction) => {
    const bearerHeader = request.headers['authorization']
    console.log(bearerHeader);
    if( typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, process.env.JWT_TOKEN as string, (err, data) => {
            if(err) {
                response.status(403).json({mensaje: "No permitido"});
            }else{
                next();
            }
        });
    }
    else {
        response.status(403).json({mensaje: "No permitido"});
    }
}