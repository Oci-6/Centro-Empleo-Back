import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";
import { User } from "./User";

@Entity()
export class Postulante extends User {
 
    //Datos basicos
    @Column({
    nullable: true})
    documento: string;

    @Column({
    nullable: true})
    tipoDocumento: string;

    @Column({
    nullable: true})
    primerNombre: string;

    @Column({
    nullable: true})
    segundoNombre: string;

    @Column({
    nullable: true})
    primerApellido: string;

    @Column({
    nullable: true})
    segundoApellido: string;
    
    @Column({
    nullable: true})
    sexo: string;

    @Column({
    nullable: true})
    fechaNacimiento: Date;

    //Direccion
    @Column({
    nullable: true})
    barrio: string;

    @Column({
    nullable: true})
    direccion: string;

    //Contacto
    @Column({
    nullable: true})
    primerTelefono: string;
    
    @Column({
    nullable: true})
    segundoTelefono: string;

    //Nivel educativo formal
    @Column({
    nullable: true})
    nivelEducativo: string;

    @Column({
    nullable: true})
    estadoNE: string;

    @Column({
    nullable: true})
    orientacionNE: string;

    //Jornadas preferidas
    @Column({
    nullable: true})
    jIndiferente: boolean;

    @Column({
    nullable: true})
    jCompleta: boolean;

    @Column({
    nullable: true})
    jMtMañana: boolean;

    @Column({
    nullable: true})
    jMtTarde: boolean;

    @Column({
    nullable: true})
    jMtNoche: boolean;

    //Trabajo
    @Column({
    nullable: true})
    puestoPreferido: string;

    @Column({
    nullable: true})
    areaInteres: string;

    @Column({
    nullable: true})
    aspiracionSalarial: number;

    //Flags de control
    @Column({
    nullable: true})
    visibilidad: boolean;

    @Column({
    nullable: true})
    estado: boolean;

    @Column({
    nullable: true})
    recibirOfertas: boolean;

    //Relaciones con otros datos


}
