import { Column, Entity } from "typeorm";
import { User } from "./User";

@Entity()
export class Empresa extends User{

    @Column({
        unique:true
    })
    rut: number;

    @Column()
    razonSocial: string;

    @Column()
    estado: boolean;

    @Column()
    fechaExpiracion: Date;
}