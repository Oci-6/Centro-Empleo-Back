import { DeleteResult, getRepository } from "typeorm";
import { ConocimientoInfo } from "../models/ConocimientoInfo";

export const get = async (id: string): Promise<ConocimientoInfo|undefined> => {
    if (!id) return undefined;

    return await getRepository(ConocimientoInfo).findOne(id,{ relations: ["postulante"] });
}

export const getAll = async (id:string): Promise<ConocimientoInfo[]> => {
    return await getRepository(ConocimientoInfo).find({where: {postulante: id}, relations: ["postulante"] });
}

export const save = async (entity: any): Promise<ConocimientoInfo[]> => {
    const newEntity = getRepository(ConocimientoInfo).create(entity);
    
    const savedEntity = await getRepository(ConocimientoInfo).save(newEntity);

    return savedEntity;
}

export const update = async (entity: any): Promise<ConocimientoInfo[]> => {
    const savedEntity = await getRepository(ConocimientoInfo).save(entity);

    return savedEntity;
}

export const borrar = async (id: string): Promise<DeleteResult> => {
    return await getRepository(ConocimientoInfo).delete(id);;
}