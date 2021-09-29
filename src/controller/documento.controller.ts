import { Request, Response } from 'express';
import * as helperDocumento from '../helpers/documento.helper';
import * as helperPostulante from '../helpers/postulante.helper';
import { Documento } from '../models/Documento';

// Conocimientos informaticos Controller

export const getDocumento = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.id) return res.status(400).json({message: "No se ingreso id"});
    
    let documento = await helperDocumento.get(req.params.id);

    if(!documento) return res.status(200).json({message: "No existe Documento"});

    return res.status(200).json(Documento);
}

export const getDocumentos = async (req: Request, res: Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso id"});

    return res.status(200).json(await helperDocumento.getAll(req.params.idPostulante));
}

export const postDocumento = async (req: Request, res:Response): Promise<Response> => {
    if(!req.params.idPostulante) return res.status(400).json({message: "No se ingreso postulante"});
    if(!req.params.tipo) return res.status(400).json({message: "No se ingreso tipo"});

    let postulante = await helperPostulante.get(req.params.idPostulante);
    if(!postulante) return res.status(200).json({message: "No se encontre postulante"})
    let documento = {
        tipo: req.params.tipo,
        ubicacion: req.file?.path,
        postulante: postulante
    }

    return res.status(200).json(await helperDocumento.save(documento))

}

export const putDocumento = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.id) return res.status(400).json({message: "No se ingreso id"});


    return res.status(200).json(await helperDocumento.update(req.body))

}

export const  deleteDocumento = async (req: Request, res: Response): Promise<Response> => {
    return res.send("borrado");
}
