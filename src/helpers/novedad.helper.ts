import { getRepository } from "typeorm";
import { Novedad } from "../models/Novedad";

export const get = async (id: string): Promise<Novedad|undefined> => {
    if (!id) return undefined;

    return await getRepository(Novedad).findOne(id,{ relations: ["admin"] });
}

export const getNovedadesAdmin = async (id:string): Promise<Novedad[]> => {
    return await getRepository(Novedad).find({where: {admin: id}, relations: ["admin"] });
}

export const getAll = async (): Promise<Novedad[]> => {
    return await getRepository(Novedad).find();
}

export const save = async (entity: any): Promise<Novedad[]> => {
    const newEntity = getRepository(Novedad).create(entity);
    
    const savedEntity = await getRepository(Novedad).save(newEntity);

    return savedEntity;
}

export const update = async (entity: any): Promise<Novedad[]> => {
    const savedEntity = await getRepository(Novedad).save(entity);

    return savedEntity;
}