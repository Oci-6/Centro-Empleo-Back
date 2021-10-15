import { Request, Response } from 'express';
import { createConnection, getConnection } from 'typeorm';
import * as helperEmpresa from '../helpers/empresa.helper';
import * as helperUsuario from '../helpers/usuario.helper';
import { encrypt } from '../libs/encriptacion';
import { sendEmail } from '../libs/sendEmail';
import { Empresa } from '../models/Empresa';
import jwt from "jsonwebtoken";
import { accesoEmpresa, nuevaEmpresa } from '../libs/htmlMail';
require('dotenv').config()

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
    if (!empresa.email) return res.status(400).json({ message: "No se ingreso email" });
    if (!empresa.contraseña) return res.status(400).json({ message: "No se ingreso contraseña" });


    if (await helperUsuario.getByEmail(empresa.email)) return res.status(400).json({ message: 'Email ya existe' });
    if (await helperEmpresa.getByRUT(empresa.rut)) return res.status(400).json({ message: 'RUT ya existe' });

    const connection = getConnection("appsocios");
    let empresaAppSocios = await connection.createQueryBuilder().select().from("empresa", "empresa").where("empresa.rut = :rut", { rut: empresa.rut }).getRawOne();
    if (empresaAppSocios) {
        let localidad = await connection.createQueryBuilder().select().from("localidad", "localidad").where("localidad.id = :id", { id: empresaAppSocios.id }).getRawOne();

        console.log(localidad);
        empresa.estado = true;
        empresa.razonSocial = empresaAppSocios.razon_social;
    }

    empresa.contraseña = await encrypt(empresa.contraseña);

    let savedEmpresa: any = await helperEmpresa.save(empresa);
    let tipo = "Empresa";
    return res.status(200).json({ usuario: savedEmpresa, token: jwt.sign({ usuario: savedEmpresa.id, tipo: tipo }, process.env.JWT_TOKEN as string), tipo: tipo });

}

export const putEmpresa = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.id) return res.status(400).json({ message: "No se ingreso id" });

    let empresa: Empresa | undefined = await helperEmpresa.get(req.body.id)
    console.log(empresa);

    if (!empresa) return res.status(400).json({ message: 'No se encontro usuario' });

    let empresaPut: Empresa = req.body;
    let saved: any = {}
    if (!empresa.razonSocial) {
        
        empresaPut.estado = true;
        saved = await helperEmpresa.update(empresaPut)

        let emp: any = await helperEmpresa.get(req.body.id)

        sendEmail("mauri3418@gmail.com", "Nueva Empresa", nuevaEmpresa(emp));
    }else{
        saved = await helperEmpresa.update(empresaPut)
    }

    return res.status(200).json(saved);

}

export const habilitarEmpresa = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.id) return res.status(400).json({ message: "No se ingreso id" });

    if (!await helperEmpresa.get(req.body.id)) return res.status(400).json({ message: 'No se encontro usuario' });

    let empresa: Empresa = req.body;


    return res.status(200).json(await helperEmpresa.update(empresa))

}

export const sendEmailAcceso = async (req: Request, res: Response): Promise<Response> => {

    let empresa: Empresa | undefined = await helperEmpresa.get(JSON.parse(req.params.jwtauth).usuario)
    
    if(!empresa) return res.status(400).json({ message: 'No se encontro usuario' });

    sendEmail(process.env.ADMIN as string, "Nueva Empresa", accesoEmpresa(empresa));


    return res.status(200).json({ message: "Enviado" });


}

export const buscarEmpresas = async (request: Request, response: Response): Promise<Response> => {

    console.log(request.query);
    let {query, page} = request.query;
    let result: [Empresa[], number] = await helperEmpresa.buscar(query, 12*Number(page));
    let res = {
        empresas: result[0],
        total: result[1]
    }
    
    return response.status(200).json(res);
   

}
