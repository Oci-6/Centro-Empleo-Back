import { getRepository } from "typeorm";
import { Documento } from "../models/Documento";

export const get = async (id: string): Promise<Documento|undefined> => {
    if (!id) return undefined;

    return await getRepository(Documento).findOne(id,{ relations: ["postulante"] });
}

export const getAll = async (id:string): Promise<Documento[]> => {
    return await getRepository(Documento).find({where: {postulante: id}});
}

export const save = async (entity: any): Promise<Documento[]> => {
    const newEntity = getRepository(Documento).create(entity);
    
    const savedEntity = await getRepository(Documento).save(newEntity);

    return savedEntity;
}

export const update = async (entity: any): Promise<Documento[]> => {
    const savedEntity = await getRepository(Documento).save(entity);

    return savedEntity;
}