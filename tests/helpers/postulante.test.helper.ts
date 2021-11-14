import { Repository } from "typeorm";
import { encrypt } from "../../src/libs/encriptacion";
import { Postulante } from "../../src/models/Postulante";

export class PostulanteTest {

    static tokenPostulante: string;

    static postulante: Postulante | undefined;

    static postulantesSeed = async (repositorio: Repository<Postulante>) => {

        let postulante1 = new Postulante();

        Object.assign(postulante1, { email: "mauri3418@gmail.com", contraseña: await encrypt("12345") });
        await repositorio.save(postulante1);

        PostulanteTest.postulante = await repositorio.findOne({ where: { email: "mauri3418@gmail.com" } });

        let postulante2 = new Postulante();

        Object.assign(postulante2, { email: "santiago@gmail.com", contraseña: await encrypt("12345") });
        await repositorio.save(postulante2);

    }

    static postulantePut =
        {
            primerNombre: "Mauricio",
            segundoNombre: "Ezequiel",
            primerApellido: "Camacho",
            segundoApellido: "Camacho",
            fechaNacimiento: new Date('03-06-2001'),
            documento: "55685772",
            tipoDocumento: "Cedula",
            sexo: "Masculino",
            direccion: "Brandi 883",
            barrio: "Centro",
            primerTelefono: "091854085",
            nivelEducativo: "Universitario",
            orientacionNE: "Ingenieria",
            jIndiferente: true,
            jCompleta: true,
            recibirOfertas: true,
            terminosCondiciones: true
        }

    static capacitacionPost = {
        nombre: "Genexus",
        areaTematica: "Tecnologia",
        institucion: "Genexus Training",
        fechaInicio: new Date("2021-06-20T00:00:00"),
        duracion: 5,
        tipoDuracion: "Semanas",
        estado: "Completo"
    }

    static capacitacionesValues = [{
        cap: {
            nombre: "",
            institucion: "Genexus Training",
            fechaInicio: new Date("2022-06-20T00:00:00"),
            duracion: -1,
            estado: true
        },
        postulante: 1
    },
    {
        cap: {
            nombre: "Genexus",
            areaTematica: "Tecnologia",
            institucion: "Genexus Training",
            fechaInicio: new Date("2021-06-20T00:00:00"),
            duracion: 5,
            tipoDuracion: "Semanas",
            estado: "Completo"
        },
        postulante: 100
    }

    ]

    static conocimientoInfoPost = {
        nombreApp: "Excel",
        categoria: "Ofimatica",
        nivelConocimiento: "Avanzado"
    }

    static conocimientoInfoValues = [
        {
            info: {
                nombreApp: true,
                categoria: 353,
                nivelConocimiento: "coso"
            },
            postulante: 1
        },
        {

            info: {
                categoria: false,
                nivelConocimiento: "Avanzado"
            },
            postulante: 1

        },
        {
            info: {
                nombreApp: "Excel",
                categoria: "Ofimatica",
                nivelConocimiento: "Avanzado"
            },
            postulante: 100
        },
    ]

    static idiomaPost = {
        nombre: "Aleman",
        hablaConv: "Basico",
        compLec: "Basico",
        escritura: "Basico",
        compAud: "Basico"
    }
}