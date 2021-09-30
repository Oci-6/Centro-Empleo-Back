import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { CapacitacionFormacion } from "./CapacitacionFormacion";
import { ConocimientoInfo } from "./ConocimientoInfo";
import { ExpLaboral } from "./ExpLaboral";
import { Idioma } from "./Idioma";
import { Localidad } from "./Localidad";
import { Oferta } from "./Oferta";
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
    jMtManiana: boolean;

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
    
    @Column({
        nullable: true
    })
    curriculum: string;

    //Flags de control
    @Column({
        default: false
    })
    visibilidad: boolean;

    @Column({
        default: true
    })
    estado: boolean;

    @Column({
        default: false
    })
    recibirOfertas: boolean;

    //Relaciones con otros datos

    @ManyToOne(() => Pais)
    @JoinColumn()
    pais: Pais;

    @ManyToOne(() => Localidad)
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

    @OneToMany(() => PreferenciaLaboral, preferenciaLaboral=> preferenciaLaboral.postulante)
    preferenciaLaboral: PreferenciaLaboral[];

    @ManyToMany(() => Oferta, oferta => oferta.postulantes)
    ofertas: Oferta[];
}
