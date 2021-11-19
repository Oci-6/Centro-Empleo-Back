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

    static postulantePost =
        {
            email: "mauricio@mail.com",
            contraseña: "12345",
        }

    static postulanteValues = [
        {
            email: "mauricio@mail.com",
            contraseña: "12345",
        },{
            email: "mauriciomail.com",
            contraseña: "",
        },{
            email: "235@mail.com",
            contraseña: true,
        },{
            contraseña: "12345",
        },{
            email: "478@mail.com",
        }
    ]

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
            estadoNE: "Completo",
            jIndiferente: true,
            jCompleta: true,
            recibirOfertas: true,
            terminosCondiciones: true,
            pais: 1
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

    static idiomasValues = [{
        idioma: {
            nombre: "Aleman",
            compLec: "",
            escritura: -1,
            compAud: true
        },
        postulante: 1
    },
    {
        idioma: {
            nombre: "Aleman",
            hablaConv: "Basico",
            compLec: "Basico",
            escritura: "Basico",
            compAud: "Basico"
        },
        postulante: 100
    },
    {
        idioma: {
            nombre: "Otro",
            hablaConv: "Basico",
            compLec: "Basico",
            escritura: "Basico",
            compAud: "Basico"
        },
        postulante: 1
    }

    ]

    static expLaboralPost = {
        nombreEmp: "Altech",
        cargo: "Pasante",
        area: "Tecnologia",
        nivelJer: "Pasante",
        tareas: "Desarrollo, testing, documentacion",
        fechaInicio: new Date("2021-04-20T00:00:00"),
        fechaFin: new Date("2021-09-20T00:00:00"),
        trabajando: false,
        nombreRef: "Mauricio",
        apellidoRef: "Ronqui",
        cargoRef: "CEO",
        telefonoRef: "099133535",
        emailRef: "mronqui@gmail.com"

    }

    static expLaboralValues = [{
        exp: {
            nombreEmp: "",
            cargo: "Pasante",
            nivelJer: "Pasante",
            fechaInicio: false,
            fechaFin: new Date("2021-09-20T00:00:00"),
            trabajando: -100,
            nombreRef: "Mauricio",
            apellidoRef: true,
            cargoRef: "CEO",
            telefonoRef: "099133535",
            emailRef: "mronqui@gmail.com"
        },
        postulante: 1
    },
    {
        exp: {
            nombreEmp: "Altech",
            cargo: "Pasante",
            area: "Tecnologia",
            nivelJer: "Pasante",
            tareas: "Desarrollo, testing, documentacion",
            fechaInicio: new Date("2021-04-20T00:00:00"),
            fechaFin: new Date("2021-09-20T00:00:00"),
            trabajando: false,
            nombreRef: "Mauricio",
            apellidoRef: "Ronqui",
            cargoRef: "CEO",
            telefonoRef: "099133535",
            emailRef: "mronqui@gmail.com"
        },
        postulante: 100
    }, {
        exp: {
            nombreEmp: "Altech",
            cargo: "Pasante",
            area: "Tecnologia",
            nivelJer: "Pasante",
            tareas: "Desarrollo, testing, documentacion",
            fechaInicio: new Date("2021-04-20T00:00:00"),
            fechaFin: new Date("2021-09-20T00:00:00"),
            trabajando: false,
            nombreRef: "Mauricio",
            apellidoRef: "Ronqui",
            cargoRef: "CEO",
            telefonoRef: "09914533535",
            emailRef: "mronqudsg.com"
        },
        postulante: 1
    },



    ]

    static permisosLicenciaPost = {
        tipoDocumento: "Carne",
        vigencia: new Date("2023-09-20T00:00:00"),

    }

    static permisosLicenciasValues = [
        {
            permiso: {
                tipoDocumento: "",
                vigencia: -1,
            },
            postulante: 1
        },
        {
            permiso: {
                tipoDocumento: "Carne",
                vigencia: new Date("2022-04-20T00:00:00"),
            },
            postulante: 100
        }, {
            permiso: {
                tipoDocumento: "Otro",
                vigencia: new Date("2022-04-20T00:00:00"),
            },
            postulante: 1
        },




    ]

    static preferenciaLaboralPost = {
        puestoPreferido: "Gerente",
        areaInteres: "Tecnologia",
        aspiracionSalarial: 30000
    }

    static preferenciaLaboralValues = [
        {
            pref: {
                puestoPreferido: new Date(),
                areaInteres: true,
                aspiracionSalarial: -1000,
            },
            postulante: 1
        },
        {
            pref: {
                puestoPreferido: "Gerente",
                areaInteres: "Tecnologia",
                aspiracionSalarial: '30000'
            },
            postulante: 100
        }, {
            pref: {
                puestoPreferido: "Otro",
            },
            postulante: 1
        },




    ]

}