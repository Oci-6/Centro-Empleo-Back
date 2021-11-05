import { DeepPartial, DeleteResult, getRepository, ILike, MoreThan} from "typeorm";
import { Oferta } from "../models/Oferta";

export const get = async (id: string): Promise<Oferta | undefined> => {
    if (!id) return undefined;

    return await getRepository(Oferta).findOne(id, { relations: ["postulantes", "empresa"] });
}

export const search = async (query: any, skip: number): Promise<[Oferta[], number]> => {

    if (query)
        return await getRepository(Oferta).findAndCount({
            where: {
                vacante: ILike('%'+query + '%'),
                fechaCierre: MoreThan(new Date())
            },
            take: 12,
            skip: skip,
            order: {
                fechaCreacion: "DESC"
            },
            relations: ["empresa"]
        });
    else
        return await getRepository(Oferta).findAndCount({
            where: {
                fechaCierre: MoreThan(new Date())
            },
            take: 12,
            skip: skip,
            order: {
                fechaCreacion: "DESC"
            },
            relations: ["empresa"]
        });
}

export const getAllEmpresa = async (empresa: number): Promise<Oferta[]> => {
    return await getRepository(Oferta).find({ where: { empresa }, relations: ["postulantes", "empresa"] });
}

export const getAll = async (): Promise<Oferta[]> => {
    return await getRepository(Oferta).find({relations: ["postulantes", "empresa"]});
}

export const save = async (entity: any): Promise<Oferta[]> => {
    const newEntity = getRepository(Oferta).create(entity);

    const savedEntity = await getRepository(Oferta).save(newEntity);

    return savedEntity;
}

export const update = async (entity: DeepPartial<Oferta>[]): Promise<Oferta[]> => {
    const savedEntity = await getRepository(Oferta).save(entity);

    return savedEntity;
}

export const borrar = async (id: string | number): Promise<DeleteResult> => {

    return await getRepository(Oferta).softDelete(id);
}