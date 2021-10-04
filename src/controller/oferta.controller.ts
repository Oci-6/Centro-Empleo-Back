import * as helperOferta from "../helpers/oferta.helper"
import { Request, Response } from "express";
import { Oferta } from "../models/Oferta";
import { getRepository } from "typeorm";

export const postOferta = async (request: Request, response: Response): Promise<Response> => {

    //Validando
    if(!request.body.vacante) return response.status(400).json({message: "No ingreso vacante"}); 
    if(!request.body.funcionesTareas) return response.status(400).json({message: "No ingreso funciones y tareas"}); 
    if(!request.body.fechaCierre) return response.status(400).json({message: "No ingreso fecha de cierrre"}); 
    if(!request.body.areaTrabajo) return response.status(400).json({message: "No ingreso area de trabajo"});  
    if(!request.body.requisitosExcluyentes) return response.status(400).json({message: "No ingreso requisitos excluyentes"});  
    if(!request.body.horario) return response.status(400).json({message: "No ingreso horario"});  
    if(!request.body.lugar) return response.status(400).json({message: "No ingreso lugar"});  

    //Obtener token
    let jwtauth = JSON.parse(request.params.jwtauth);

    let oferta: Oferta = request.body;

    //Asociacion segun el usuario
    if(jwtauth.tipo!="Admin"){
        oferta.empresa = jwtauth.usuario;
    }

    return response.status(200).json(await helperOferta.save(oferta));
}

export const getOferta = async (request: Request, response: Response): Promise<Response> => {
    if(!request.params.id) return response.status(400).json({message: "No ingreso id"}); 

    return response.status(200).json(await helperOferta.get(request.params.id));
}

export const getOfertas = async (request: Request, response: Response): Promise<Response> => {
    return response.status(200).json(await helperOferta.getAll());
}

export const getOfertasEmpresario = async (request: Request, response: Response): Promise<Response> => {
    //Obtener token
    let jwtauth = JSON.parse(request.params.jwtauth);

    return response.status(200).json(await helperOferta.getAllEmpresa(jwtauth.usuario));

}

export const putOferta = async (request: Request, response: Response): Promise<Response> => {
    if(!request.body.id) return response.status(400).json({message: "No ingreso id"}); 

    return response.status(200).json(await helperOferta.update(request.body));

}

export const deleteOferta = async (request: Request, response: Response): Promise<Response> => {
    if(!request.params.id) return response.status(400).json({message: "No ingreso id"}); 

    return response.status(200).json(await helperOferta.borrar(request.params.id));

}

export const buscarOfertas = async (request: Request, response: Response): Promise<Response> => {

    console.log(request.query);
    let {query, page} = request.query;
    let result: [Oferta[], number] = await helperOferta.search(query, 12*Number(page));
    let res = {
        ofertas: result[0],
        total: result[1]
    }
    
    return response.status(200).json(res);
   

}

