import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { Departamento } from "./Departamento";

@Entity()
export class Pais extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Departamento, departamento => departamento.pais)
    departamentos: Departamento[];
}