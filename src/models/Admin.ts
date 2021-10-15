import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { User } from "./User";
import { Novedad } from "./Novedad";

@Entity()
export class Admin extends User {

    @OneToMany(() => Novedad, novedad => novedad.admin)
    novedades: Novedad[];

}