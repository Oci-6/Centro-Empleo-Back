import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne} from "typeorm";
import { Departamento } from "./Departamento";

@Entity()
export class Localidad extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @ManyToOne(() => Departamento, departamento => departamento.localidades)
    deparmento: Departamento;
}