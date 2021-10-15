import { getRepository } from "typeorm";
import { Admin } from "../models/Admin";
import { Empresa } from "../models/Empresa";
import { Postulante } from "../models/Postulante";
import { User } from "../models/User";

export const getByEmail = async (email: string): Promise<User|undefined> => {

    let user: User | undefined;

    user = await getRepository(Postulante).findOne({where: {email}});
    
    if(user){
       return user; 
    }

    user = await getRepository(Empresa).findOne({where: {email}});
    
    if(user){
       return user; 
    }

    user = await getRepository(Admin).findOne({where: {email}});
    
    if(user){
       return user; 
    }



    return undefined;
}
export const update = async (user: User | any): Promise<User[]> => {

   const savedUser = await getRepository(user.constructor).save(user);

   return savedUser;
}