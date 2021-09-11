import { DeepPartial, getRepository } from "typeorm";
import { CapacitacionFormacion} from '../models/CapacitacionFormacion'
import { Postulante } from "../models/Postulante";

export const get = async (id: string): Promise<CapacitacionFormacion|undefined> => {
    if (!id) return undefined;

    return await getRepository(CapacitacionFormacion).findOne(id,{ relations: ["postulante"] });
}

export const getAll = async (id:string): Promise<CapacitacionFormacion[]> => {
    return await getRepository(CapacitacionFormacion).find({where: {postulante: id}, relations: ["postulante"] });
}

export const save = async (entity: any): Promise<CapacitacionFormacion[]> => {
    const newEntity = getRepository(CapacitacionFormacion).create(entity);
    
    const savedEntity = await getRepository(CapacitacionFormacion).save(newEntity);

    return savedEntity;
}

export const update = async (entity: any): Promise<CapacitacionFormacion[]> => {
    const savedEntity = await getRepository(CapacitacionFormacion).save(entity);

    return savedEntity;
}