import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable, CreateDateColumn} from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column({
        nullable: true
    })
    contraseña: string;

    @CreateDateColumn()
    fechaCreacion: Date;
}