import { DeepPartial, getRepository } from "typeorm";
import { Localidad } from "../models/Localidad";

export const get = async (id: string): Promise<Localidad|undefined> => {
    if (!id) return undefined;

    return await getRepository(Localidad).findOne(id,{ relations: ["departamento", "departamento.pais"] });
}

export const getAll = async (departamento: string): Promise<Localidad[]> => {
    return await getRepository(Localidad).find({ where: {departamento}, relations: ["departamento", "departamento.pais"] });
}

export const save = async (entity: any): Promise<Localidad[]> => {
    const newEntity= getRepository(Localidad).create(entity);

    const savedEntity = await getRepository(Localidad).save(newEntity);

    return savedEntity;
}

export const update = async (entity: DeepPartial<Localidad>[]): Promise<Localidad[]> => {
    const savedEntity = await getRepository(Localidad).save(entity);

    return savedEntity;
}