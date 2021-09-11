import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Postulante } from "./Postulante";

@Entity()
export class PreferenciaLaboral extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Postulante, postulante => postulante.preferenciaLaboral)
    postulante: Postulante;

    @Column()
    puestoPreferido: string;

    @Column()
    areaInteres: string;

    @Column()
    aspiracionSalarial: number;
}