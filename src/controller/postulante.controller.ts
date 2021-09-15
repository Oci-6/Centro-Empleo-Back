import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Postulante } from "../models/Postulante";
import { encrypt } from "../libs/encriptacion"
import * as helperPostulante from "../helpers/postulante.helper"
import * as helperPais from "../helpers/pais.helper"
import * as helperLocalidad from "../helpers/localidad.helper"
import * as helperUsuario from "../helpers/usuario.helper"

/* ----- Postulante Controller ----- */

export const postPostulante = async (request: Request, response: Response): Promise<Response> => {
    // Validando data
    if (!request.body.email) return response.status(400).json({ message: 'Falta el email del usuario' });
    if (!request.body.contraseña) return response.status(400).json({ message: 'Falta la contraseña del usuario' });

    const { email, contraseña } = request.body;

    //Validando email único
    let postulante = await helperUsuario.getByEmail( email);
    if (postulante) return response.status(400).json({ message: 'Ya existe un usuario con el email ingresado' });

    // Crear nuevo postulante
    const savedPostulante = await helperPostulante.save({ email, contraseña: await encrypt(contraseña) });

    return response.status(200).json(savedPostulante);
}

export const getPostulante = async (request: Request, response: Response): Promise<Response> => {
    if (!request.params.id) return response.status(400).json({ message: 'No se ingreso id' });

    let postulante = await helperPostulante.get(request.params.id);

    if (!postulante) return response.status(400).json({ message: 'No existe postulante' });

    return response.status(200).json(postulante);
}

export const getPostulantes = async (request: Request, response: Response): Promise<Response> => {
    return response.status(200).json(await helperPostulante.getAll());
}

export const putPostulante = async (request: Request, response: Response): Promise<Response> => {
    console.log(request.body.id);
    
    if (!request.body.id) return response.status(400).json({ message: 'No se ingreso id' });
    if (request.body.email && helperPostulante.getByEmail(request.body.email)) return response.status(400).json({ message: 'Email ya existe' });
    if (request.body.cedula && helperPostulante.getByDocumento(request.body.documento)) return response.status(400).json({ message: 'Cedula ya existe' });


    if (!await helperPostulante.get(request.body.id)) return response.status(400).json({ message: 'No se encontro usuario' });

    let postulante: Postulante = request.body;
    if (request.body.localidadId || request.body.paisId) {
        if (!request.body.localidadId) {
            let pais = await helperPais.get(request.body.paisId);
            if (!pais) return response.status(400).json({ message: 'No existe pais' });
            postulante.pais = pais;
            postulante.localidad = null;
        } else {
            let localidad = await helperLocalidad.get(request.body.localidadId)
            if (!localidad) return response.status(400).json({ message: 'No existe localidad' });
            postulante.localidad = localidad;
            postulante.pais = localidad.departamento.pais
        }
    }
    return response.status(200).json(await helperPostulante.update(postulante));
}

export const postFoto = async (req: Request, response: Response): Promise<Response> => {
    let jwtauth = JSON.parse(req.params.jwtauth);

    let postulante = await helperPostulante.get(jwtauth.usuario);
    if (!postulante) return response.status(400).json({ message: 'No se encontro usuario' });

    if(req.file) postulante.foto = req.file?.path;

    await helperPostulante.save(postulante);

    return response.status(200).json({message: "Foto subida correctamente"})
}
