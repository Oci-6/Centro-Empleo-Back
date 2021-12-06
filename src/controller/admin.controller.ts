import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Admin } from "../models/Admin";
import { encrypt } from "../libs/encriptacion"
import * as helperAdmin from "../helpers/admin.helper"
import * as helperPostulante from "../helpers/postulante.helper"
import * as helperOferta from "../helpers/oferta.helper"
import * as helperNovedad from "../helpers/novedad.helper"
import { sendEmail } from "../libs/sendEmail";
import { novedadTemplate, ofertaLaboral } from "../libs/htmlMail";

export const getStats = async (request: Request, response: Response): Promise<Response> => {
    let { fechaInicio, fechaFin } = request.query


    return response.status(200).json(await helperAdmin.data(fechaInicio as string, fechaFin as string));
}


export const compartirOferta = async (request: Request, response: Response): Promise<Response> => {
    
    let oferta = await helperOferta.get(request.params.id);
    if(!oferta) return response.status(404).json({message: "Oferta no encontrada"})
    let postulantes = await helperPostulante.getSuscriptoresEmail();
    let emails = postulantes.map(e => e.email).join(",");


    await sendEmail(emails,"Nueva oportunidad laboral", ofertaLaboral(oferta));

    return response.status(204).json();
}


export const compartirNovedad = async (request: Request, response: Response): Promise<Response> => {
    
    let novedad = await helperNovedad.get(request.params.id);
    if(!novedad) return response.status(404).json({message: "Novedad no encontrada"})
    let postulantes = await helperPostulante.getSuscriptoresEmail();
    let emails = postulantes.map(e => e.email).join(",");


    await sendEmail(emails,"Nueva novedad del Centro Comercial", novedadTemplate(novedad));

    return response.status(204).json();
}
