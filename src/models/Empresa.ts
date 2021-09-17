import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Oferta } from "./Oferta";
import { User } from "./User";

@Entity()
export class Empresa extends User{

    @Column({
        unique:true
    })
    rut: number;

    @Column()
    razonSocial: string;

    @Column({
        default:false
    })
    estado: boolean;

    @Column({
        nullable:true
    })
    fechaExpiracion: Date;

    @OneToMany(() => Oferta, ofertas => ofertas.empresa)
    ofertas: Oferta[];
}