import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Postulante } from "./Postulante";

@Entity()
export class Documento extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Postulante, postulante => postulante.documentos)
    postulante: Postulante;

    @Column()
    tipo: string;

    @Column()
    ubicacion: string;
}