import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Postulante } from "./Postulante";

@Entity()
export class ExpLaboral extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Postulante, postulante => postulante.expLaboral)
    postulante: Postulante;

    @Column()
    nombreEmp: string;

    @Column()
    cargo: string;

    @Column()
    area: string;

    @Column()
    nivelJer: string;

    @Column()
    tareas: string;

    @Column()
    fechaInicio: Date;

    @Column()
    fechaFin: Date;

    @Column()
    trabajando: boolean;

    @Column()
    nombreRef: string;

    @Column()
    apellidoRef: string;

    @Column()
    cargoRef: string;

    @Column()
    telefonoRef: string;

    @Column()
    emailRef: string;
}