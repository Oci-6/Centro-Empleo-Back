import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Admin } from "./Admin";
import { Empresa } from "./Empresa";
import { Postulante } from "./Postulante";

@Entity()
export class Oferta extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column({
        default: new Date()
    })
    fechaCreacion: Date;

    @Column()
    fechaCierre: Date;

    @ManyToOne(() => Admin, admin => admin.ofertas)
    admin: Admin;

    @ManyToOne(() => Empresa, empresa => empresa.ofertas)
    empresa: Empresa;

    @ManyToMany(() => Postulante)
    @JoinTable()
    postulantes: Postulante[];
}