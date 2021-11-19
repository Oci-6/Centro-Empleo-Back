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

    static capacitacionPut = {
        id: 1,
        nombre: "Modificado",
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

    static conocimientoInfoPut = {
        id: 1,
        nombreApp: "Modificado",
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

    static capacitacionesPutValues = [{
        cap: {
            id: "1",
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
            id: "100",
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

    static conocimientoInfoPutValues = [
        {
            info: {
                id:"1",
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
                id:"100",
                nombreApp: "Excel",
                categoria: "Ofimatica",
                nivelConocimiento: "Avanzado"
            },
            postulante: 100
        },
    ]

    static idiomaPut = {
        id: 1,
        nombre: "Modificado",
        hablaConv: "Basico",
        compLec: "Basico",
        escritura: "Basico",
        compAud: "Basico"
    }

    static idiomasPutValues = [{
        idioma: {
            id: 1,
            nombre: "Aleman",
            compLec: "",
            escritura: -1,
            compAud: true
        },
        postulante: 1
    },
    {
        idioma: {
            id: 1,
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
            id: 100,
            nombre: "Otro",
            hablaConv: "Basico",
            compLec: "Basico",
            escritura: "Basico",
            compAud: "Basico"
        },
        postulante: 1
    }

    ]

    static expLaboralPut = {
        id:1,
        nombreEmp: "Modificado",
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

    static expLaboralPutValues = [{
        exp: {
            id: 1,
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
            id:1,
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
            id:100,
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

    static permisosLicenciaPut = {
        id:1,
        tipoDocumento: "Modificado",
        vigencia: new Date("2023-09-20T00:00:00"),

    }

    static permisosLicenciasPutValues = [
        {
            permiso: {
                id:1,
                tipoDocumento: "",
                vigencia: -1,
            },
            postulante: 1
        },
        {
            permiso: {
                id:1,
                tipoDocumento: "Carne",
                vigencia: new Date("2022-04-20T00:00:00"),
            },
            postulante: 100
        }, {
            permiso: {
                id:100,
                tipoDocumento: "Otro",
                vigencia: new Date("2022-04-20T00:00:00"),
            },
            postulante: 1
        },




    ]

    static preferenciaLaboralPut = {
        id:1,
        puestoPreferido: "Modificado",
        areaInteres: "Tecnologia",
        aspiracionSalarial: 30000
    }

    static preferenciaLaboralPutValues = [
        {
            pref: {
                id:1,
                puestoPreferido: new Date(),
                areaInteres: true,
                aspiracionSalarial: -1000,
            },
            postulante: 1
        },
        {
            pref: {
                id:1,
                puestoPreferido: "Gerente",
                areaInteres: "Tecnologia",
                aspiracionSalarial: '30000'
            },
            postulante: 100
        }, {
            pref: {
                id:100,
                puestoPreferido: "Otro",
            },
            postulante: 1
        },




    ]
}