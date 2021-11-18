import { Request, Response } from 'express';
import * as helperIdioma from '../helpers/idioma.helper';
import * as helperPostulante from '../helpers/postulante.helper';
import { Idioma } from '../models/Idioma';

// Conocimientos informaticos Controller

export const getIdioma = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    
    let idioma = await helperIdioma.get(req.params.id);

    if(!idioma) return res.status(200).json({message: "No existe Idioma"});

    return res.status(200).json(Idioma);
}

export const getIdiomas = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperIdioma.getAll(req.params.idPostulante));
}

export const postIdioma = async (req: Request, res:Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso postulante"});

    let body: Idioma = req.body;
    if(validacion(body)) return res.status(400).json({message: "Valores incorrectos"});
    let postulante = await helperPostulante.get(req.params.idPostulante);
    if(!postulante) return res.status(404).json({message: "No se encontre postulante"})
    body.postulante = postulante;
    return res.status(200).json(await helperIdioma.save(body))

}

export const putIdioma = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});


    return res.status(200).json(await helperIdioma.update(req.body))

}

export const  deleteIdioma = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperIdioma.borrar(req.params.id))
}

const validacion = (idioma: Idioma) => {
    if (!idioma.nombre || typeof idioma.nombre != 'string') return true;
    if (!idioma.compAud || typeof idioma.compAud != 'string') return true;
    if (!idioma.compLec || typeof idioma.compLec != 'string') return true;
    if (!idioma.escritura || typeof idioma.escritura != 'string') return true;
    if (idioma.nombre == "Otro" &&(!idioma.especificacion || typeof idioma.especificacion != 'string')) return true;

    return false;

}