

import { DeepPartial, getRepository } from "typeorm";
import { Admin } from "../models/Admin";
import { Empresa } from "../models/Empresa";
import { Novedad } from "../models/Novedad";
import { Oferta } from "../models/Oferta";
import { Postulante } from "../models/Postulante";

export const get = async (id: string): Promise<Admin|undefined> => {
    if (!id) return undefined;

    return await getRepository(Admin).findOne({ relations: ["novedades, ofertas"] });
}

/*
export const getByNombre = async (nombre: string): Promise<Admin|undefined> => {
    if (!nombre) return undefined;

    return await getRepository(Admin).findOne({where: {id}, relations: ["departamentos"] });
}
*/


export const getByEmail = async (email: string): Promise<Admin|undefined> => {
    if (!email) return undefined;

    return await getRepository(Admin).findOne({where: {email}});
}

export const getAll = async (): Promise<Admin[]> => {
    return await getRepository(Admin).find({ relations: ["novedades, ofertas"]
});
}





export const save = async (admin: any): Promise<Admin[]> => {
    const newAdmin = getRepository(Admin).create(admin);

    const savedAdmin = await getRepository(Admin).save(newAdmin);

    return savedAdmin;
}

export const update = async (admin: DeepPartial<Admin>[] | any): Promise<Admin[]> => {
    
    const savedAdmin = await getRepository(Admin).save(admin);

    return savedAdmin;
}

export const data = async (fechaInicio: string, fechaFin: string): Promise<any> => {


    let ofertas = getRepository(Oferta).createQueryBuilder("oferta").select("oferta.id");
    let postulantesVisibles = getRepository(Postulante).createQueryBuilder("postulante").select("postulante.id").where("postulante.visibilidad = true");
    let postulantesTotal = getRepository(Postulante).createQueryBuilder("postulante").select("postulante.id");
    let empresasActivas = getRepository(Empresa).createQueryBuilder("empresa").select("empresa.id").where("empresa.fechaExpiracion > :hoy", { hoy: new Date() });
    let empresasTotal = getRepository(Empresa).createQueryBuilder("empresa").select("empresa.id");
    let postulados = getRepository(Postulante).createQueryBuilder("postulante").select("COUNT(postulante.id)").innerJoin("postulante.ofertas", "ofertas");
    let novedades = getRepository(Novedad).createQueryBuilder("novedad").select("novedad.id");

   
    if (fechaInicio && fechaFin) {
        ofertas.where("oferta.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("oferta.fechaCreacion < :fechaFin", {fechaFin: new Date(fechaFin) });
        postulantesVisibles.andWhere("postulante.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("postulante.fechaCreacion < :fechaFin", {fechaFin: new Date(fechaFin) });
        postulantesTotal.where("postulante.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("postulante.fechaCreacion < :fechaFin", {fechaFin: new Date(fechaFin) });
        empresasActivas.where("empresa.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("empresa.fechaCreacion < :fechaFin", {fechaFin: new Date(fechaFin) });
        empresasTotal.where("empresa.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("empresa.fechaCreacion < :fechaFin", {fechaFin: new Date(fechaFin) });
        postulados.andWhere("ofertas.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("ofertas.fechaCreacion < :fechaFin", {fechaFin: new Date(fechaFin) });
        novedades.where("novedad.fechaPublicacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("novedad.fechaPublicacion < :fechaFin", {fechaFin: new Date(fechaFin) });
    }


    let ofertasCount = await ofertas.getCount();
    let res = {
        ofertas: ofertasCount,
        postulantesTotal: await postulantesTotal.getCount(),
        postulantesVisibles: await postulantesVisibles.getCount(),
        empresasTotal: await empresasTotal.getCount(),
        empresasActivas: await empresasActivas.getCount(),
        promedioPostulaciones: Number((await postulados.getRawOne()).count) / ofertasCount,
        novedades: await novedades.getCount()
    }
console.log(res);

    return res;
}