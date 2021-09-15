import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { CapacitacionFormacion } from "./CapacitacionFormacion";
import { ConocimientoInfo } from "./ConocimientoInfo";
import { Documento } from "./Documento";
import { ExpLaboral } from "./ExpLaboral";
import { Idioma } from "./Idioma";
import { Localidad } from "./Localidad";
import { Pais } from "./Pais";
import { PermisosLicencias } from "./PermisosLicencias";
import { PreferenciaLaboral } from "./PreferenciaLaboral";
import { User } from "./User";

@Entity()
export class Postulante extends User {

    //Datos basicos
    @Column({
        nullable: true
    })
    documento: string;

    @Column({
        nullable: true
    })
    tipoDocumento: string;

    @Column({
        nullable: true
    })
    primerNombre: string;

    @Column({
        nullable: true
    })
    segundoNombre: string;

    @Column({
        nullable: true
    })
    primerApellido: string;

    @Column({
        nullable: true
    })
    segundoApellido: string;

    @Column({
        nullable: true
    })
    sexo: string;

    @Column({
        nullable: true
    })
    fechaNacimiento: Date;

    //Direccion
    @Column({
        nullable: true
    })
    barrio: string;

    @Column({
        nullable: true
    })
    direccion: string;

    //Contacto
    @Column({
        nullable: true
    })
    primerTelefono: string;

    @Column({
        nullable: true
    })
    segundoTelefono: string;

    //Nivel educativo formal
    @Column({
        nullable: true
    })
    nivelEducativo: string;

    @Column({
        nullable: true
    })
    estadoNE: string;

    @Column({
        nullable: true
    })
    orientacionNE: string;

    //Jornadas preferidas
    @Column({
        nullable: true
    })
    jIndiferente: boolean;

    @Column({
        nullable: true
    })
    jCompleta: boolean;

    @Column({
        nullable: true
    })
    jMtMañana: boolean;

    @Column({
        nullable: true
    })
    jMtTarde: boolean;

    @Column({
        nullable: true
    })
    jMtNoche: boolean;

    //Archivos

    @Column({
        nullable: true
    })
    foto: string;


    //Flags de control
    @Column({
        nullable: true
    })
    visibilidad: boolean;

    @Column({
        nullable: true
    })
    estado: boolean;

    @Column({
        nullable: true
    })
    recibirOfertas: boolean;

    //Relaciones con otros datos

    @OneToOne(() => Pais)
    @JoinColumn()
    pais: Pais;

    @OneToOne(() => Localidad)
    @JoinColumn()
    localidad: Localidad | null;
    
    @OneToMany(() => CapacitacionFormacion, capacitacionFormacion => capacitacionFormacion.postulante)
    capacitacionFormacion: CapacitacionFormacion[];

    @OneToMany(() => ConocimientoInfo, conocimientoInfo => conocimientoInfo.postulante)
    conocimientoInfo: ConocimientoInfo[];

    @OneToMany(() => Idioma, idioma => idioma.postulante)
    idioma: Idioma[];

    @OneToMany(() => ExpLaboral, expLaboral => expLaboral.postulante)
    expLaboral: ExpLaboral[];

    @OneToMany(() => PermisosLicencias, permisosLicencias => permisosLicencias.postulante)
    permisosLicencias: PermisosLicencias[];

    @OneToMany(() => Documento, documentos => documentos.postulante)
    documentos: Documento[];

    @OneToMany(() => PreferenciaLaboral, preferenciaLaboral=> preferenciaLaboral.postulante)
    preferenciaLaboral: PreferenciaLaboral[];
}
