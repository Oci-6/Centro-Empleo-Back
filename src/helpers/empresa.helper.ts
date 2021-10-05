import { DeepPartial, getRepository } from "typeorm";
import { Empresa } from "../models/Empresa";

export const get = async (id: string): Promise<Empresa|undefined> => {
    if (!id) return undefined;

    return await getRepository(Empresa).findOne(id,{relations: ["ofertas", "localidad","localidad.departamento"]});
}

export const getByEmail = async (email: string): Promise<Empresa|undefined> => {
    if (!email) return undefined;

    return await getRepository(Empresa).findOne({where: {email}, relations: ["ofertas", "localidad","localidad.departamento"]});
}

export const getByRUT = async (rut: number): Promise<Empresa|undefined> => {
    if (!rut) return undefined;

    return await getRepository(Empresa).findOne({where: {rut}, relations: ["ofertas", "localidad","localidad.departamento"]});
}

export const getAll = async (): Promise<Empresa[]> => {
    return await getRepository(Empresa).find({ relations: ["ofertas", "localidad","localidad.departamento"]});
}

export const save = async (empresa: any): Promise<Empresa[]> => {
    const newEmpresa = getRepository(Empresa).create(empresa);

    const savedEmpresa = await getRepository(Empresa).save(newEmpresa);

    return savedEmpresa;
}

export const update = async (empresa: DeepPartial<Empresa>[] | any): Promise<Empresa[]> => {
    
    const savedEmpresa = await getRepository(Empresa).save(empresa);

    return savedEmpresa;
}
