import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Postulante } from "./Postulante";

@Entity()
export class Idioma extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Postulante, postulante => postulante.idioma)
    postulante: Postulante;

    @Column()
    nombre: string;
    
    @Column()
    especificacion: string;
    
    @Column()
    hablaConv: string;
    
    @Column()
    compLec: string;

    @Column()
    escritura: string;

    @Column()
    compAud: string;
}