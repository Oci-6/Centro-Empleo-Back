import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Postulante } from "./Postulante";

@Entity()
export class ConocimientoInfo extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => Postulante, postulante => postulante.capacitacionFormacion)
    postulante: Postulante;

    @Column()
    nombreApp: string;

    @Column()
    categoria: string;
    
    @Column()
    nivelConocimiento: string;
}