import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinTable, OneToMany, CreateDateColumn} from "typeorm";
import { Admin } from "./Admin";

@Entity()
export class Novedad extends BaseEntity {

@PrimaryGeneratedColumn()
id: number;

@Column()
titulo: string;

@Column({
    nullable: true
})
imagen: string;

@Column()
contenido: string;

@CreateDateColumn()
fechaPublicacion: Date;


@ManyToOne(() => Admin, admin => admin.novedades)
admin: Admin;



}