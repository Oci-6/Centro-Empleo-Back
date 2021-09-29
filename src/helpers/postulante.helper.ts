import { DeepPartial, getRepository, LessThan } from "typeorm";
import { CapacitacionFormacion } from "../models/CapacitacionFormacion";
import { ConocimientoInfo } from "../models/ConocimientoInfo";
import { Postulante } from "../models/Postulante";

const relaciones = ["pais", "pais.departamentos", "pais.departamentos.localidades", "localidad", "localidad.departamento", "capacitacionFormacion", "conocimientoInfo", "idioma", "expLaboral", "permisosLicencias", "documentos", "preferenciaLaboral", "ofertas", "ofertas.empresa"]

export const get = async (id: string): Promise<Postulante | undefined> => {
    if (!id) return undefined;

    return await getRepository(Postulante).findOne(id, { relations: ["pais", "pais.departamentos", "pais.departamentos.localidades", "localidad", "localidad.departamento", "capacitacionFormacion", "conocimientoInfo", "idioma", "expLaboral", "permisosLicencias", "documentos", "preferenciaLaboral", "ofertas", "ofertas.empresa"] });
}

export const buscar = async (params: any): Promise<Postulante[]> => {
    if (params["fechaNacimiento"]) {
        let fn = params["fechaNacimiento"];
        delete params["fechaNacimiento"];
        console.log(...params);
        params = {...params, fechaNacimiento: LessThan(fn)}
        return await getRepository(Postulante).find({
            where: params,

            relations: relaciones
        })
    }

    return await getRepository(Postulante).find({
        where: params,

        relations: relaciones
    })
}


export const getByEmail = async (email: string): Promise<Postulante | undefined> => {
    if (!email) return undefined;

    return await getRepository(Postulante).findOne({ where: { email } });
}

export const getByDocumento = async (documento: string): Promise<Postulante | undefined> => {
    if (!documento) return undefined;

    return await getRepository(Postulante).findOne({ where: { documento } });
}

export const getAll = async (): Promise<Postulante[]> => {
    return await getRepository(Postulante).find({relations: relaciones});
}

export const save = async (postulante: any): Promise<Postulante[]> => {
    const newPostulante = getRepository(Postulante).create(postulante);

    const savedPostulante = await getRepository(Postulante).save(newPostulante);
    return savedPostulante;
}

export const update = async (postulante: DeepPartial<Postulante>[] | any): Promise<Postulante[]> => {

    const savedPostulante = await getRepository(Postulante).save(postulante);

    return savedPostulante;
}
