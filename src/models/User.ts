import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable} from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    contraseña: string;

}