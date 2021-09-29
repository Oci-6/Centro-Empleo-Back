import * as helperOferta from "../helpers/oferta.helper"
import { Request, Response } from "express";
import { Oferta } from "../models/Oferta";
import { getRepository } from "typeorm";

export const postOferta = async (request: Request, response: Response): Promise<Response> => {

    //Validando
    if(!request.body.titulo) return response.status(400).json({message: "No ingreso titulo"}); 
    if(!request.body.descripcion) return response.status(400).json({message: "No ingreso titulo"}); 
    if(!request.body.fechaCierre) return response.status(400).json({message: "No ingreso titulo"}); 

    //Obtener token
    let jwtauth = JSON.parse(request.params.jwtauth);

    let oferta: Oferta = request.body;

    //Asociacion segun el usuario
    if(jwtauth.tipo==="Admin"){
        oferta.admin = jwtauth.usuario;
    }else{
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
console.log(jwtauth);

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
    let res = {
        ofertas: await helperOferta.search(query,12*Number(page)),
        total: await helperOferta.totalRows(query)
    }
        return response.status(200).json(res);
   

}

