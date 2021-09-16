import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { User } from "./User";
import { Novedad } from "./Novedad";
import { Oferta } from "./Oferta";

@Entity()
export class Admin extends User {


    @OneToMany(() => Novedad, novedad => novedad.admin)
    novedades: Novedad[];

    @OneToMany(() => Oferta, oferta => oferta.admin)
    ofertas: Oferta[];

}