import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable, OneToMany, ManyToOne} from "typeorm";
import { Localidad } from "./Localidad";
import { Pais } from "./Pais";

@Entity()
export class Departamento extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Localidad, localidad => localidad.deparmento)
    localidades: Localidad[];

    @ManyToOne(() => Pais, pais => pais.departamentos)
    pais: Pais;
}