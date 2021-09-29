import { DeepPartial, getRepository } from "typeorm";
import { Departamento } from "../models/Departamento";

export const get = async (id: string): Promise<Departamento|undefined> => {
    if (!id) return undefined;

    return await getRepository(Departamento).findOne(id,{ relations: ["localidades", "pais"] });
}

export const getAll = async (pais: string): Promise<Departamento[]> => {
    return await getRepository(Departamento).find({ where: {pais}, relations: ["localidades", "pais"] });
}

export const save = async (entity: any): Promise<Departamento[]> => {
    const newEntity= getRepository(Departamento).create(entity);

    const savedEntity = await getRepository(Departamento).save(newEntity);

    return savedEntity;
}

export const update = async (entity: DeepPartial<Departamento>[]): Promise<Departamento[]> => {
    const savedEntity = await getRepository(Departamento).save(entity);

    return savedEntity;
}