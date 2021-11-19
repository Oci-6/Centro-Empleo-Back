import { Request, Response } from 'express';
import { createConnection, getConnection } from 'typeorm';
import * as helperEmpresa from '../helpers/empresa.helper';
import * as helperUsuario from '../helpers/usuario.helper';
import { encrypt } from '../libs/encriptacion';
import { sendEmail } from '../libs/sendEmail';
import { Empresa } from '../models/Empresa';
import jwt from "jsonwebtoken";
import { accesoConcedido, accesoEmpresa, nuevaEmpresa } from '../libs/htmlMail';
import e from 'cors';
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

    if (validacionPost(empresa)) return res.status(400).json({ message: 'Valores incorrectos' });

    if (await helperUsuario.getByEmail(empresa.email)) return res.status(400).json({ message: 'Email ya existe' });
    if (await helperEmpresa.getByRUT(empresa.rut)) return res.status(400).json({ message: 'RUT ya existe' });
    
    try {
        const connection = getConnection("appsocios");
        let empresaAppSocios = await connection.createQueryBuilder().select().from("empresa", "empresa").where("empresa.rut = :rut", { rut: empresa.rut }).getRawOne();
        if (empresaAppSocios) {
            let localidad = await connection.createQueryBuilder().select().from("localidad", "localidad").where("localidad.id = :id", { id: empresaAppSocios.id }).getRawOne();

            console.log(localidad);
            empresa.estado = true;
            empresa.razonSocial = empresaAppSocios.razon_social;
        }
    } catch { }

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

    if (validacion(empresaPut)) return res.status(400).json({ message: 'Valores incorrectos' });
    let saved: any = {}
    if (!empresa.razonSocial) {

        empresaPut.estado = true;
        saved = await helperEmpresa.update(empresaPut)

        let emp: any = await helperEmpresa.get(req.body.id)

        // await sendEmail(process.env.ADMIN as string, "Nueva Empresa", nuevaEmpresa(emp));
    } else {
        saved = await helperEmpresa.update(empresaPut)
    }

    return res.status(200).json(saved);

}

export const habilitarEmpresa = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.id) return res.status(400).json({ message: "No se ingreso id" });

    if (validacionHabilitar(req.body)) return res.status(400).json({ message: "Valores incorrectos" });
    let empresa = await helperEmpresa.get(req.body.id)
    if (!empresa) return res.status(404).json({ message: 'No se encontro usuario' });

    Object.assign(empresa, req.body)

    let savedEmpresa = await helperEmpresa.update(empresa)

    // await sendEmail(savedEmpresa.email, "Acceso concedido", accesoConcedido(savedEmpresa));

    return res.status(200).json(savedEmpresa);

}

export const sendEmailAcceso = async (req: Request, res: Response): Promise<Response> => {

    let empresa: Empresa | undefined = await helperEmpresa.get(JSON.parse(req.params.jwtauth).usuario)

    if (!empresa) return res.status(400).json({ message: 'No se encontro usuario' });

    // await sendEmail(process.env.ADMIN as string, "Nueva Empresa", accesoEmpresa(empresa));


    return res.status(200).json({ message: "Enviado" });


}

export const buscarEmpresas = async (request: Request, response: Response): Promise<Response> => {

    let { query, page } = request.query;
    let result: [Empresa[], number] = await helperEmpresa.buscar(query, 12 * Number(page));
    let res = {
        empresas: result[0],
        total: result[1]
    }

    return response.status(200).json(res);


}

const validacion = (empresa: Empresa) => {
    if (!empresa.razonSocial || typeof empresa.razonSocial != 'string') return true;
    if (typeof empresa.visibilidad === 'undefined') return true;
    if (empresa.visibilidad && !empresa.nombreFantasia || typeof empresa.nombreFantasia != 'string') return true;
    if (!empresa.telefono || typeof empresa.telefono != 'string' || (empresa.telefono.length != 8 && empresa.telefono.length != 12 && empresa.telefono.length != 9)) return true;
    return false;

}

const validacionHabilitar = (body: any) => {
    if (!body.fechaExpiracion || new Date(body.fechaExpiracion) < new Date()) return true;

    return false;
}

const validacionPost = (empresa: Empresa) => {
    if (!empresa.contraseña || typeof empresa.contraseña != 'string') return true;
    if (!empresa.email || typeof empresa.email != 'string'|| !empresa.email.includes('@')) return true;
    if (!empresa.rut || empresa.rut.length != 12 || !/^\d+$/.test(empresa.rut)) return true;
}
