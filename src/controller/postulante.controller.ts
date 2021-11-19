import { Request, Response } from "express";
import { Postulante } from "../models/Postulante";
import { encrypt } from "../libs/encriptacion"
import * as helperPostulante from "../helpers/postulante.helper"
import * as helperPais from "../helpers/pais.helper"
import * as helperLocalidad from "../helpers/localidad.helper"
import * as helperUsuario from "../helpers/usuario.helper"
import * as helperOferta from "../helpers/oferta.helper"
import { Oferta } from "../models/Oferta";
import { RelationQueryBuilder } from "typeorm";
import { limpiarArchivos } from "../libs/limpiarArchivos";
import pdf from "html-pdf";
import { templatePDF } from "../libs/pdf";

/* ----- Postulante Controller ----- */

export const postPostulante = async (request: Request, response: Response): Promise<Response> => {
    // Validando data
    if(validacionPost(request.body)) return response.status(400).json({message: "Valores incorrectos"});

    const { email, contraseña } = request.body;

    //Validando email único
    let postulante = await helperUsuario.getByEmail(email);
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
    if (request.body.email && await helperUsuario.getByEmail(request.body.email)) return response.status(400).json({ message: 'Email ya existe' });
    if (request.body.cedula && await helperPostulante.getByDocumento(request.body.documento)) return response.status(400).json({ message: 'Cedula ya existe' });

    let jwtauth = JSON.parse(request.params.jwtauth);

    let postulante: Postulante | undefined = await helperPostulante.get(jwtauth.usuario);

    console.log(postulante);
    

    if (!postulante) return response.status(400).json({ message: 'No se encontro usuario' });

    Object.assign(postulante, request.body);

    
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
    if (postulante.documento && !postulante.tipoDocumento) return response.status(400).json({ message: 'No ingreso tipo de documento' })
    if (!postulante.documento && postulante.tipoDocumento) return response.status(400).json({ message: 'No ingreso tipo documento' })

    postulante.terminosCondiciones = perfilCompleto(postulante);

    return response.status(200).json(await helperPostulante.update(postulante));
}

export const postFoto = async (req: Request, response: Response): Promise<Response> => {
    let jwtauth = JSON.parse(req.params.jwtauth);

    if(!req.file) return response.status(400).json({message: "No se envio archivo"})

    if(!req.file?.mimetype.includes("image/")) return response.status(400).json({message: "Archivo invalido"})

    let postulante = await helperPostulante.get(jwtauth.usuario);
    if (!postulante) return response.status(400).json({ message: 'No se encontro usuario' });


    if(postulante.foto&&postulante.foto.includes("uploads")){
        let fileName = postulante.foto.substr(postulante.foto.lastIndexOf('/')+1);
        limpiarArchivos(fileName)
    } 

    if (req.file) postulante.foto = req.file?.path;

    await helperPostulante.save(postulante);

    return response.status(200).json({ message: "Foto subida correctamente" })
}

export const postCV = async (req: Request, response: Response): Promise<Response> => {
    let jwtauth = JSON.parse(req.params.jwtauth);

    if(!req.file) return response.status(400).json({message: "No se envio archivo"})

    if(req.file?.mimetype != "application/pdf") return response.status(400).json({message: "Archivo invalido"})

    let postulante = await helperPostulante.get(jwtauth.usuario);
    if (!postulante) return response.status(400).json({ message: 'No se encontro usuario' });


    if(postulante.curriculum&&postulante.curriculum.includes("uploads")){
        let fileName = postulante.curriculum.substr(postulante.curriculum.lastIndexOf('/')+1);
        limpiarArchivos(fileName)
    } 

    if (req.file) postulante.curriculum =  req.file?.path;

    await helperPostulante.save(postulante);

    return response.status(200).json({ message: "Curriculum subida correctamente" })
}

export const postularse = async (req: Request, res: Response): Promise<Response> => {
    let jwtauth = JSON.parse(req.params.jwtauth);


    if (!req.params.idOferta) return res.status(400).json({ message: 'No se ingreso oferta' });
    let oferta: any | undefined = await helperOferta.get(req.params.idOferta);
    if (!oferta) return res.status(400).json({ message: 'No se encontro oferta' });


    let postulante = await helperPostulante.get(jwtauth.usuario);
    if (!postulante) return res.status(400).json({ message: 'No se encontro usuario' });

    if(oferta.postulantes.find((elem:any) => elem.id = jwtauth.usuario)) return res.status(400).json({ message: 'Ya se encuentra postulado' });

    if (!postulante.terminosCondiciones) return res.status(400).json({ message: 'Perfil incompleto' });
    oferta.postulantes.push(postulante);

    return res.status(200).json(await helperOferta.update(oferta));
}

export const buscarPostulantes = async (request: Request, response: Response): Promise<Response> => {
    let { filtros, page } = request.query;
    //Obtener token
    let jwtauth = JSON.parse(request.params.jwtauth);
    let params = JSON.parse(filtros as string)
    params["usuario"] = jwtauth.tipo;

    return response.status(200).json(await helperPostulante.buscar(params, 10 * Number(page)));
}

export const generarPDF = async (request: Request, response: Response): Promise<Response> => {

    if (!request.params.id) return response.status(400).json({ message: 'No se ingreso el id del postulante' });
    const postulante = await helperPostulante.get(request.params.id);
    if(!postulante) return response.status(404).json({ message: 'No se encontró el postulante' });

    pdf.create(await templatePDF(request.protocol + "://" + request.get("Host"), postulante)).toBuffer((err: any, res: any) =>{
        if(err) return Promise.reject;

        response.setHeader('Content-Type', 'application/pdf');
        response.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');

        return response.end(res);
    }) 
    
    return response;
}

const perfilCompleto = (postulante: Postulante): boolean => {

    if(!postulante.documento) return false;
    if(!postulante.tipoDocumento) return false;
    if(!postulante.primerNombre) return false;
    if(!postulante.primerApellido) return false;
    if(!postulante.segundoApellido) return false;
    if(!postulante.sexo) return false;
    if(!postulante.fechaNacimiento) return false;
    if(!postulante.direccion) return false;
    if(!postulante.primerTelefono) return false;
    if(!postulante.email) return false;
    if(!postulante.nivelEducativo) return false;
    if(!postulante.estadoNE) return false;
    if(!postulante.orientacionNE&&postulante.nivelEducativo=="Otro") return false;
    if(!(postulante.jCompleta||postulante.jIndiferente||postulante.jMtManiana||postulante.jMtNoche||postulante.jMtTarde)) return false;
    if(!postulante.pais) return false;
    if(postulante.pais.nombre== "Uruguay" &&!postulante.localidad) return false;

    return true;
}

const validacionPost = (postulante: Postulante): boolean => {
    if (!postulante.email || typeof postulante.email != 'string'|| !postulante.email.includes('@')) return true;
    if (!postulante.contraseña || typeof postulante.contraseña != 'string') return true;

    return false;
}