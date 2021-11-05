

import { DeepPartial, getManager, getRepository } from "typeorm";
import { Admin } from "../models/Admin";
import { Empresa } from "../models/Empresa";
import { Novedad } from "../models/Novedad";
import { Oferta } from "../models/Oferta";
import { Postulante } from "../models/Postulante";

export const get = async (id: string): Promise<Admin | undefined> => {
    if (!id) return undefined;

    return await getRepository(Admin).findOne({ relations: ["novedades, ofertas"] });
}


export const getByEmail = async (email: string): Promise<Admin | undefined> => {
    if (!email) return undefined;

    return await getRepository(Admin).findOne({ where: { email } });
}

export const getAll = async (): Promise<Admin[]> => {
    return await getRepository(Admin).find({
        relations: ["novedades, ofertas"]
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
    // let ofertashistorico = getRepository(Oferta).createQueryBuilder("oferta").select("COUNT(oferta.id)");
    let postulantesVisibles = getRepository(Postulante).createQueryBuilder("postulante").select("postulante.id").where("postulante.visibilidad = true").andWhere("postulante.terminosCondiciones = true");
    let postulantesTotal = getRepository(Postulante).createQueryBuilder("postulante").select("postulante.id").where("postulante.terminosCondiciones = true");
    let empresasActivas = getRepository(Empresa).createQueryBuilder("empresa").select("empresa.id").where("empresa.fechaExpiracion > :hoy", { hoy: new Date() });
    let empresasTotal = getRepository(Empresa).createQueryBuilder("empresa").select("empresa.id");
    let postulados = getRepository(Postulante).createQueryBuilder("postulante").select("COUNT(postulante.id)").innerJoin("postulante.ofertas", "ofertas");
    let novedades = getRepository(Novedad).createQueryBuilder("novedad").select("novedad.id");

    ofertas.where("oferta.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("oferta.fechaCreacion < :fechaFin", { fechaFin: new Date(fechaFin) });
    postulantesVisibles.andWhere("postulante.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("postulante.fechaCreacion < :fechaFin", { fechaFin: new Date(fechaFin) });
    postulantesTotal.andWhere("postulante.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("postulante.fechaCreacion < :fechaFin", { fechaFin: new Date(fechaFin) });
    empresasActivas.where("empresa.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("empresa.fechaCreacion < :fechaFin", { fechaFin: new Date(fechaFin) });
    empresasTotal.where("empresa.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("empresa.fechaCreacion < :fechaFin", { fechaFin: new Date(fechaFin) });
    postulados.andWhere("ofertas.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("ofertas.fechaCreacion < :fechaFin", { fechaFin: new Date(fechaFin) });
    novedades.where("novedad.fechaPublicacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("novedad.fechaPublicacion < :fechaFin", { fechaFin: new Date(fechaFin) });

    let ofertasPorMes = await ofertasByMonth(new Date(fechaInicio), new Date(fechaFin));
    let empresasPorMes = await empresasByMonth(new Date(fechaInicio), new Date(fechaFin));
    let postulantesPorMes = await postulantesByMonth(new Date(fechaInicio), new Date(fechaFin));

    let ofertasCount = await ofertas.getCount();
    let res = {
        ofertas: ofertasCount,
        postulantesTotal: await postulantesTotal.getCount(),
        postulantesVisibles: await postulantesVisibles.getCount(),
        empresasTotal: await empresasTotal.getCount(),
        empresasActivas: await empresasActivas.getCount(),
        promedioPostulaciones: Number((await postulados.getRawOne()).count) / ofertasCount,
        novedades: await novedades.getCount(),
        ofertasPorMes: ofertasPorMes,
        empresasPorMes: empresasPorMes,
        postulantesPorMes: postulantesPorMes
    }
 console.log(res);
 
    return res;
}

export const ofertasByMonth = async (fechaInicio: Date, fechaFin: Date): Promise<any> => {
    let result: { fecha: Date, historico: any }[] = [];
    for (var i = 1; fechaInicio < fechaFin;) {
        let fecha = new Date(fechaInicio);
        let historico = await getRepository(Oferta).createQueryBuilder("oferta").select("oferta.id").where("oferta.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("oferta.fechaCreacion < :fechaFin", { fechaFin: new Date(fechaInicio.setMonth(fechaInicio.getMonth() + i)) }).getCount();
        result.push({ fecha, historico })
    }
    return result;
}

export const empresasByMonth = async (fechaInicio: Date, fechaFin: Date): Promise<any> => {
    let result: { fecha: Date, historico: any }[] = [];
    for (var i = 1; fechaInicio < fechaFin;) {
        let fecha = new Date(fechaInicio);
        let historico = await getRepository(Empresa).createQueryBuilder("empresa").select("empresa.id").where("empresa.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("empresa.fechaCreacion < :fechaFin", { fechaFin: new Date(fechaInicio.setMonth(fechaInicio.getMonth() + i)) }).getCount();
        result.push({ fecha, historico })
    }
    return result;
}
export const postulantesByMonth = async (fechaInicio: Date, fechaFin: Date): Promise<any> => {
    let result: { fecha: Date, historico: any }[] = [];
    for (var i = 1; fechaInicio < fechaFin;) {
        let fecha = new Date(fechaInicio);
        let historico = await getRepository(Postulante).createQueryBuilder("postulante").select("postulante.id").where("postulante.fechaCreacion > :fechaInicio", { fechaInicio: new Date(fechaInicio) }).andWhere("postulante.fechaCreacion < :fechaFin", { fechaFin: new Date(fechaInicio.setMonth(fechaInicio.getMonth() + i)) }).getCount();
        result.push({ fecha, historico })
    }
    return result;
}