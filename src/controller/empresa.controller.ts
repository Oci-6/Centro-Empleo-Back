import { Request, Response } from 'express';
import * as helperEmpresa from '../helpers/empresa.helper';
import * as helperUsuario from '../helpers/usuario.helper';
import { encrypt } from '../libs/encriptacion';
import { sendEmail } from '../libs/sendEmail';
import { Empresa } from '../models/Empresa';

// Conocimientos informaticos Controller

export const getEmpresa = async (req: Request, res: Response): Promise<Response> => {
    if (!req.params.id) return res.status(400).json({ message: "No se ingreso id" });

    let Empresa = await helperEmpresa.get(req.params.id);

    if (!Empresa) return res.status(200).json({ message: "No existe Empresa" });

    return res.status(200).json(Empresa);
}

export const getEmpresas = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json(await helperEmpresa.getAll());
}

export const postEmpresa = async (req: Request, res: Response): Promise<Response> => {

    let empresa: Empresa = req.body;

    if (!empresa.rut) return res.status(400).json({ message: "No se ingreso RUT" });
    if (!empresa.razonSocial) return res.status(400).json({ message: "No se ingreso razon social" });
    if (!empresa.email) return res.status(400).json({ message: "No se ingreso email" });
    if (!empresa.contraseña) return res.status(400).json({ message: "No se ingreso contraseña" });


    if (await helperUsuario.getByEmail(empresa.email)) return res.status(400).json({ message: 'Email ya existe' });
    if (await helperEmpresa.getByRUT(empresa.rut)) return res.status(400).json({ message: 'RUT ya existe' });


    empresa.contraseña = await encrypt(empresa.contraseña);

    return res.status(200).json(await helperEmpresa.save(empresa));

}

export const putEmpresa = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.id) return res.status(400).json({ message: "No se ingreso id" });

    if (!await helperEmpresa.get(req.body.id)) return res.status(400).json({ message: 'No se encontro usuario' });

    let empresa: Empresa = req.body;


    return res.status(200).json(await helperEmpresa.update(empresa))

}

export const sendEmailAcceso = async(req: Request, res: Response): Promise<Response> => {
    
    let text =
    "Empresa solicita acceso \n\n"+
    "Datos de la empresa\n"+
    "RUT: "+req.body.rut+
    "\nRazon social: "+req.body.razonSocial;

    let toAdmin = "mauricio.camacho@estudiantes.utec.edu.uy"

    let asunto = "Solicitud de acceso"

    let enviado:boolean = await sendEmail(toAdmin,asunto,text);

    if(enviado){
        return res.status(200).json({message: "Enviado"});
    } else{
        return res.status(400).json({message: "Error"});
    }

}
