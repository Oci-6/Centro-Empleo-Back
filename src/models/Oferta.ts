import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable, OneToMany, ManyToOne} from "typeorm";
import { Admin } from "./Admin";
import { Departamento } from "./Departamento";

@Entity()
export class Oferta extends BaseEntity {

@ManyToOne(() => Admin, admin => admin.ofertas)
admin: Admin;

@PrimaryGeneratedColumn()
id: number;

@Column()
titulo: string;

@Column()
descripcion: string;

@Column()
fechaCreacion: Date;

@Column()
fechaCierre: Date;


}