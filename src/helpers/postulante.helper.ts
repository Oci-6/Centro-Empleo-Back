import { DeepPartial, getRepository, LessThan } from "typeorm";
import { CapacitacionFormacion } from "../models/CapacitacionFormacion";
import { ConocimientoInfo } from "../models/ConocimientoInfo";
import { Postulante } from "../models/Postulante";

const relaciones = ["pais", "pais.departamentos", "pais.departamentos.localidades", "localidad", "localidad.departamento", "capacitacionFormacion", "conocimientoInfo", "idioma", "expLaboral", "permisosLicencias", "preferenciaLaboral", "ofertas", "ofertas.empresa"]

export const get = async (id: string): Promise<Postulante | undefined> => {
    if (!id) return undefined;

    return await getRepository(Postulante).findOne(id, { relations: ["pais", "pais.departamentos", "pais.departamentos.localidades", "localidad", "localidad.departamento", "capacitacionFormacion", "conocimientoInfo", "idioma", "expLaboral", "permisosLicencias", "preferenciaLaboral", "ofertas", "ofertas.empresa"] });
}

export const buscar = async (params: any, skip: number): Promise<any> => {
    const query = getRepository(Postulante)
        .createQueryBuilder("postulante")
        .leftJoinAndSelect("postulante.pais", "pais")
        .leftJoinAndSelect("postulante.localidad", "localidad")
        .leftJoinAndSelect("localidad.departamento", "departamento")
        .leftJoinAndSelect("postulante.capacitacionFormacion", "capacitacionFormacion")
        .leftJoinAndSelect("postulante.conocimientoInfo", "conocimientoInfo")
        .leftJoinAndSelect("postulante.idioma", "idioma")
        .leftJoinAndSelect("postulante.expLaboral", "expLaboral")
        .leftJoinAndSelect("postulante.permisosLicencias", "permisos")
        .leftJoinAndSelect("postulante.preferenciaLaboral", "preferenciaLaboral");

    //Filtros Datos Personales
    if (params.sexo) query.andWhere("postulante.sexo = :sexo", { sexo: params.sexo });
    if (params.fechaNacimiento) query.andWhere("postulante.fechaNacimiento < :fechaNacimiento", { fechaNacimiento: params.fechaNacimiento });
    if (params.departamento) query.andWhere("localidad.departamento.nombre = :departamento", { departamento: params.departamento });
    if (params.localidad) query.andWhere("localidad.nombre = :localidad", { localidad: params.localidad });

    //Formacion
    if (params.nivelEducativo) query.andWhere("postulante.nivelEducativo = :ne", { ne: params.nivelEducativo });
    if (params.estadoNE) query.andWhere("postulante.estadoNE = :estadoNE", { estadoNE: params.estadoNE });
    if (params.areaTematica) query.andWhere("capacitacionFormacion.areaTematica = :area", { area: params.areaTematica });
    if (params.idioma) query.andWhere("idioma.nombre = :idioma", { idioma: params.idioma });

    //Experiencias, Permisos y Preferencias
    if (params.rubro) query.andWhere("expLaboral.area = :rubro", { rubro: params.rubro });
    if (params.permisos) query.andWhere("permisos.tipoDocumento = :permisos", { permisos: params.permisos });
    if (params.interes) query.andWhere("preferenciaLaboral.areaInteres = :interes", { interes: params.interes });

    if (params.usuario == "Empresa") {
        query.andWhere("postulante.visibilidad = true")
    }

    let queryResult = await query.skip(skip).take(10).getManyAndCount();
    return { postulantes: queryResult[0], total: queryResult[1] }
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
    return await getRepository(Postulante).find({ relations: relaciones });
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

