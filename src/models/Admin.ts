import { Entity, OneToMany } from "typeorm";
import { Oferta } from "./Oferta";
import { User } from "./User";

@Entity()
export class Admin extends User{

}