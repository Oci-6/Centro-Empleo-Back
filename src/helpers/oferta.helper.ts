import { DeepPartial, DeleteResult, getRepository } from "typeorm";
import { Oferta } from "../models/Oferta";

export const get = async (id: string): Promise<Oferta|undefined> => {
    if (!id) return undefined;

    return await getRepository(Oferta).findOne(id,{ relations: ["postulantes","empresa"] });
}

export const getAllEmpresa = async (empresa: number): Promise<Oferta[]> => {
    return await getRepository(Oferta).find({ where: {empresa}, relations: ["postulantes","empresa" ]});
}

export const getAll = async (): Promise<Oferta[]> => {
    return await getRepository(Oferta).find();
}

export const save = async (entity: any): Promise<Oferta[]> => {
    const newEntity= getRepository(Oferta).create(entity);

    const savedEntity = await getRepository(Oferta).save(newEntity);

    return savedEntity;
}

export const update = async (entity: DeepPartial<Oferta>[]): Promise<Oferta[]> => {
    const savedEntity = await getRepository(Oferta).save(entity);

    return savedEntity;
}

export const borrar = async (id: string | number): Promise<DeleteResult> => {

    return await getRepository(Oferta).delete(id);;
}