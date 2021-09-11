import { getRepository } from "typeorm";
import { PermisosLicencias } from "../models/PermisosLicencias";

export const get = async (id: string): Promise<PermisosLicencias|undefined> => {
    if (!id) return undefined;

    return await getRepository(PermisosLicencias).findOne(id,{ relations: ["postulante"] });
}

export const getAll = async (id:string): Promise<PermisosLicencias[]> => {
    return await getRepository(PermisosLicencias).find({where: {postulante: id}, relations: ["postulante"] });
}

export const save = async (entity: any): Promise<PermisosLicencias[]> => {
    const newEntity = getRepository(PermisosLicencias).create(entity);
    
    const savedEntity = await getRepository(PermisosLicencias).save(newEntity);

    return savedEntity;
}

export const update = async (entity: any): Promise<PermisosLicencias[]> => {
    const savedEntity = await getRepository(PermisosLicencias).save(entity);

    return savedEntity;
}