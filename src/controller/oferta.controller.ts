import * as helperOferta from "../helpers/oferta.helper"
import { Request, Response } from "express";
import { Oferta } from "../models/Oferta";
import { getRepository } from "typeorm";

export const postOferta = async (request: Request, response: Response): Promise<Response> => {

    //Obtener token
    let jwtauth = JSON.parse(request.params.jwtauth);

    let oferta: Oferta = request.body;

    //Validando
    if(validacion(oferta)) return response.status(400).json({message: 'Valores incorrectos'});

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

    let oferta: any = await helperOferta.get(request.body.id);

    if(!oferta) return response.status(404).json({message: "No existe oferta"});

    Object.assign(oferta, request.body);

    if(validacion(oferta)) return response.status(400).json({message: "Valores incorrectos"});

    return response.status(200).json(await helperOferta.update(oferta));

}

export const deleteOferta = async (request: Request, response: Response): Promise<Response> => {
    if(!request.params.id) return response.status(400).json({message: "No ingreso id"}); 

    let oferta = await helperOferta.get(request.params.id);
    let jwtauth = JSON.parse(request.params.jwtauth);

    if(!oferta||oferta.empresa.id != jwtauth.usuario) return response.status(404).json({message: "Oferta no encontrada"});

    

    return response.status(200).json(await helperOferta.borrar(request.params.id));

}

export const buscarOfertas = async (request: Request, response: Response): Promise<Response> => {

    let {query, page} = request.query;
    let result: [Oferta[], number] = await helperOferta.search(query, 12*Number(page));
    let res = {
        ofertas: result[0],
        total: result[1]
    }
    
    return response.status(200).json(res);
   

}

const validacion = (oferta: Oferta) => {

    if(!oferta.vacante|| typeof oferta.vacante != 'string') return true; 
    if(!oferta.funcionesTareas|| typeof oferta.funcionesTareas != 'string') return true;  
    if(!oferta.fechaCierre || new Date(oferta.fechaCierre) < new Date()) return true;
    if(!oferta.areaTrabajo|| typeof oferta.areaTrabajo != 'string') return true;  
    if(!oferta.requisitosExcluyentes|| typeof oferta.requisitosExcluyentes != 'string') return true; 
    if(!oferta.horario|| typeof oferta.horario != 'string') return true;  
    if(!oferta.lugar|| typeof oferta.lugar != 'string') return true;
    if(oferta.requisitosValorar && typeof oferta.requisitosValorar != 'string') return true; 
    if(oferta.salarioDesde &&( typeof oferta.salarioDesde != 'number'|| oferta.salarioDesde < 0 )) return true; 
    if(oferta.salarioHasta &&( typeof oferta.salarioHasta != 'number'|| oferta.salarioHasta < 0 || oferta.salarioDesde > oferta.salarioHasta )) return true; 

    
    return false;
}
