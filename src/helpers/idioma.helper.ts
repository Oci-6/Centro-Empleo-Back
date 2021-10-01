import { DeleteResult, getRepository } from "typeorm";
import { Idioma } from "../models/Idioma";

export const get = async (id: string): Promise<Idioma|undefined> => {
    if (!id) return undefined;

    return await getRepository(Idioma).findOne(id,{ relations: ["postulante"] });
}

export const getAll = async (id:string): Promise<Idioma[]> => {
    return await getRepository(Idioma).find({where: {postulante: id}, relations: ["postulante"] });
}

export const save = async (entity: any): Promise<Idioma[]> => {
    const newEntity = getRepository(Idioma).create(entity);
    
    const savedEntity = await getRepository(Idioma).save(newEntity);

    return savedEntity;
}

export const update = async (entity: any): Promise<Idioma[]> => {
    const savedEntity = await getRepository(Idioma).save(entity);

    return savedEntity;
}

export const borrar = async (id: string): Promise<DeleteResult> => {
    return await getRepository(Idioma).delete(id);;
}