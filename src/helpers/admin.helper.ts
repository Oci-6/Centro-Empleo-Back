

import { DeepPartial, getRepository } from "typeorm";
import { Admin } from "../models/Admin";

export const get = async (id: string): Promise<Admin|undefined> => {
    if (!id) return undefined;

    return await getRepository(Admin).findOne({ relations: ["novedades, ofertas"] });
}

/*
export const getByNombre = async (nombre: string): Promise<Admin|undefined> => {
    if (!nombre) return undefined;

    return await getRepository(Admin).findOne({where: {id}, relations: ["departamentos"] });
}
*/


export const getByEmail = async (email: string): Promise<Admin|undefined> => {
    if (!email) return undefined;

    return await getRepository(Admin).findOne({where: {email}});
}

export const getAll = async (): Promise<Admin[]> => {
    return await getRepository(Admin).find({ relations: ["novedades, ofertas"]
});
}





export const save = async (admin: any): Promise<Admin[]> => {
    const newAdmin = getRepository(Admin).create(admin);

    const savedAdmin = await getRepository(Admin).save(newAdmin);

    return savedAdmin;
}

export const update = async (admin: DeepPartial<Admin>[] | any): Promise<Admin[]> => {
    
    const savedAdmin = await getRepository(Admin).save(admin);

    return savedAdmin;
}
