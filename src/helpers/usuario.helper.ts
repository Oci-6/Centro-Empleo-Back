import { getRepository } from "typeorm";
import { Admin } from "../models/Admin";
import { Empresa } from "../models/Empresa";
import { Postulante } from "../models/Postulante";
import { User } from "../models/User";

export const getByEmail = async (email: string): Promise<User|undefined> => {

    let user: User | undefined;

    user = await getRepository(Postulante).findOne({where: {email}, select: ["id","email", "contraseña"]});
    
    if(user){
       return user; 
    }

    user = await getRepository(Empresa).findOne({where: {email}, select: ["id","email", "contraseña"]});
    
    if(user){
       return user; 
    }

    user = await getRepository(Admin).findOne({where: {email}, select: ["id","email", "contraseña"]});
    
    if(user){
       return user; 
    }



    return undefined;
}
