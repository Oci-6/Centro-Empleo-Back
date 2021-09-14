import { getRepository } from "typeorm";
import { Postulante } from "../models/Postulante";

export const getByEmail = async (email: string): Promise<Postulante|undefined> => {

    let user: Postulante | undefined;

    user = await getRepository(Postulante).findOne({where: {email}, select: ["email", "contraseña"]});
    
    if(user){
       return user; 
    }


    return undefined;
}
