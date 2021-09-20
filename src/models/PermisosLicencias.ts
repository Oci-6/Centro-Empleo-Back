import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Postulante } from "./Postulante";

@Entity()
export class PermisosLicencias extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Postulante, postulante => postulante.permisosLicencias)
    postulante: Postulante;

    @Column()
    tipoDocumento: string;

    @Column()
    vigencia: Date;

    @Column()
    especificacion: string;
}