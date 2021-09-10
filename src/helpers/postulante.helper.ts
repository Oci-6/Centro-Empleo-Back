import { DeepPartial, getRepository } from "typeorm";
import { Postulante } from "../models/Postulante";

export const get = async (id: string): Promise<Postulante|undefined> => {
    if (!id) return undefined;

    return await getRepository(Postulante).findOne(id);
}

export const getByEmail = async (email: string): Promise<Postulante|undefined> => {
    if (!email) return undefined;

    return await getRepository(Postulante).findOne({where: {email}});
}

export const getByDocumento = async (documento: string): Promise<Postulante|undefined> => {
    if (!documento) return undefined;

    return await getRepository(Postulante).findOne({where: {documento}});
}

export const getAll = async (): Promise<Postulante[]> => {
    return await getRepository(Postulante).find();
}

export const save = async (postulante: any): Promise<Postulante[]> => {
    const newPostulante = getRepository(Postulante).create(postulante);

    const savedPostulante = await getRepository(Postulante).save(newPostulante);

    return savedPostulante;
}

export const update = async (postulante: DeepPartial<Postulante>[]): Promise<Postulante[]> => {
    const savedPostulante = await getRepository(Postulante).save(postulante);

    return savedPostulante;
}