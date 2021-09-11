import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Postulante } from "./Postulante";

@Entity()
export class CapacitacionFormacion extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Postulante, postulante => postulante.capacitacionFormacion)
    postulante: Postulante;

    @Column()
    nombre: string;
    
    @Column()
    areaTematica: string;

    @Column()
    institucion: string;

    @Column()
    fechaInicio: Date;

    @Column()
    duracion: number;

    @Column()
    estado: string;



}