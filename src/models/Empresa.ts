import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Localidad } from "./Localidad";
import { Oferta } from "./Oferta";
import { User } from "./User";

@Entity()
export class Empresa extends User{

    @Column({
        unique:true
    })
    rut: string;

    @Column({
        nullable: true
    })
    razonSocial: string;

    @Column({
        nullable: true
    })
    nombreFantasia: string;

    @Column({
        default:false
    })
    visibilidad: boolean;

    @Column({
        nullable: true
    })
    telefono: string;

    @Column({
        default:false
    })
    estado: boolean;

    @Column({
        nullable:true
    })
    fechaExpiracion: Date;

    @ManyToOne(() => Localidad)
    @JoinColumn()
    localidad: Localidad | null;
    
    @OneToMany(() => Oferta, ofertas => ofertas.empresa)
    ofertas: Oferta[];
}