import { DeepPartial, getRepository } from "typeorm";
import { Pais } from "../models/Pais";

export const get = async (id: string): Promise<Pais|undefined> => {
    if (!id) return undefined;

    return await getRepository(Pais).findOne(id,{ relations: ["departamentos"] });
}
export const getByNombre = async (nombre: string): Promise<Pais|undefined> => {
    if (!nombre) return undefined;

    return await getRepository(Pais).findOne({where: {nombre}, relations: ["departamentos"] });
}
export const getAll = async (): Promise<Pais[]> => {
    return await getRepository(Pais).find({ relations: ["departamentos", "departamentos.localidades"] ,order: {
        nombre: "ASC"
    }});
}

export const save = async (entity: any): Promise<Pais[]> => {
    const newEntity= getRepository(Pais).create(entity);

    const savedEntity = await getRepository(Pais).save(newEntity);

    return savedEntity;
}

export const update = async (pais: DeepPartial<Pais>[]): Promise<Pais[]> => {
    const savedEntity = await getRepository(Pais).save(pais);

    return savedEntity;
}