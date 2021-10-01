import { DeleteResult, getRepository } from "typeorm";
import { ExpLaboral } from "../models/ExpLaboral";

export const get = async (id: string): Promise<ExpLaboral|undefined> => {
    if (!id) return undefined;

    return await getRepository(ExpLaboral).findOne(id,{ relations: ["postulante"] });
}

export const getAll = async (id:string): Promise<ExpLaboral[]> => {
    return await getRepository(ExpLaboral).find({where: {postulante: id}, relations: ["postulante"] });
}

export const save = async (entity: any): Promise<ExpLaboral[]> => {
    const newEntity = getRepository(ExpLaboral).create(entity);
    
    const savedEntity = await getRepository(ExpLaboral).save(newEntity);

    return savedEntity;
}

export const update = async (entity: any): Promise<ExpLaboral[]> => {
    const savedEntity = await getRepository(ExpLaboral).save(entity);

    return savedEntity;
}

export const borrar = async (id: string): Promise<DeleteResult> => {
    return await getRepository(ExpLaboral).delete(id);;
}