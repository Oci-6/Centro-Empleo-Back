import { BaseEntity, Column, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Admin } from "./Admin";
import { Empresa } from "./Empresa";
import { Postulante } from "./Postulante";

@Entity()
export class Oferta extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @DeleteDateColumn()
    fechaBorrado?: Date;

    @Column()
    vacante: string;

    @Column()
    areaTrabajo: string;

    @Column()
    requisitosExcluyentes: string;

    @Column()
    funcionesTareas: string;

    @Column({
        nullable: true
    })
    requisitosValorar: string;

    @Column()
    horario: string;

    @Column({
        nullable: true
    })
    salarioDesde: number;

    @Column({
        nullable: true
    })
    salarioHasta: number;

    @Column()
    lugar: string;

    @Column({
        default: new Date()
    })
    fechaCreacion: Date;

    @Column()
    fechaCierre: Date;

    @ManyToOne(() => Empresa, empresa => empresa.ofertas)
    empresa: Empresa;

    @ManyToMany(() => Postulante, postulante => postulante.ofertas)
    @JoinTable()
    postulantes: Postulante[];
}