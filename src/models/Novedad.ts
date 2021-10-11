import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinTable, OneToMany} from "typeorm";
import { Admin } from "./Admin";

@Entity()
export class Novedad extends BaseEntity {

@PrimaryGeneratedColumn()
id: number;

@Column()
titulo: string;

@Column()
imagen: string;

@Column()
contenido: string;

@Column()
fechaPublicacion: Date;


@ManyToOne(() => Admin, admin => admin.novedades)
admin: Admin;



}