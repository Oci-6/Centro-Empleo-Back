import { DeleteResult, getRepository } from "typeorm";
import { PreferenciaLaboral } from "../models/PreferenciaLaboral";

export const get = async (id: string): Promise<PreferenciaLaboral|undefined> => {
    if (!id) return undefined;

    return await getRepository(PreferenciaLaboral).findOne(id,{ relations: ["postulante"] });
}

export const getAll = async (id:string): Promise<PreferenciaLaboral[]> => {
    return await getRepository(PreferenciaLaboral).find({where: {postulante: id}, relations: ["postulante"] });
}

export const save = async (entity: any): Promise<PreferenciaLaboral[]> => {
    const newEntity = getRepository(PreferenciaLaboral).create(entity);
    
    const savedEntity = await getRepository(PreferenciaLaboral).save(newEntity);

    return savedEntity;
}

export const update = async (entity: any): Promise<PreferenciaLaboral[]> => {
    const savedEntity = await getRepository(PreferenciaLaboral).save(entity);

    return savedEntity;
}

export const borrar = async (id: string): Promise<DeleteResult> => {
    return await getRepository(PreferenciaLaboral).delete(id);;
}