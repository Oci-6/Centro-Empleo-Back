import { Repository } from "typeorm";
import { encrypt } from "../../src/libs/encriptacion";
import { Empresa } from "../../src/models/Empresa";


export class EmpresaTest {
    static tokenEmpresa: string;
    static tokenAdmin: string;

    static empresa: Empresa | undefined;

    static empresasSeed = async (repositorio: Repository<Empresa>) => {

        let empresa1 = new Empresa();

        Object.assign(empresa1, { email: "empresa@mail.com", rut: "325235", contraseña: await encrypt("12345") });
        await repositorio.save(empresa1);

        EmpresaTest.empresa = await repositorio.findOne({ where: { email: "empresa@mail.com" } });

        let empresa2 = new Empresa();

        Object.assign(empresa2, { email: "empresa1@mail.com", rut: "352355", contraseña: await encrypt("12345") });
        await repositorio.save(empresa2);

    }

    static empresaPut = {
        id: 1,
        razonSocial: "Pepito SRL",
        nombreFantasia: "Pepe Panchos",
        visibilidad: true,
        telefono: "091424824",
    }

    static empresaPutValues = [
        {
            id: 1,
            razonSocial: true,
            nombreFantasia: -1,
            visibilidad: "COso",
            telefono: "😐",
        }
        , {
            id: 200,
            razonSocial: "Pepito SRL",
            nombreFantasia: "Pepe Panchos",
            visibilidad: true,
            telefono: "091424824",
        }, {
            id: 1,
            razonSocial: "Pepito SRL",
            visibilidad: true,
            telefono: "091424824325235",
        }
    ]

    static habilitarEmpresa = {
        id: 1,
        fechaExpiracion: new Date("2021-12-20T00:00:00")
    }

    static habilitarEmpresaValues = [
        {
            id: 1,
            fechaExpiracion: new Date("2020-12-20T00:00:00")
        }
        , {
            id: 10,
            fechaExpiracion: new Date("2021-12-20T00:00:00")
        }
        , {
            id: 1
        }
    ]

    static ofertaPost = {
        vacante: "Panadero",
        areaTrabajo: "Gastronomia",
        requisitosExcluyentes: "Saber hacer pan",
        funcionesTareas: "Hacer pan",
        requisitosValorar: "Que le quede rico el pan",
        horario: "L a D de 8 a 23",
        salarioDesde: 200,
        salarioHasta: 500,
        lugar: "Panaderia",
        fechaCierre: new Date("2021-12-20T00:00:00"),
    }

    static ofertasValues = [
        {
            vacante: "Panadero",
            areaTrabajo: "Gastronomia",
            requisitosExcluyentes: "Saber hacer pan",
            funcionesTareas: "Hacer pan",
            requisitosValorar: "Que le quede rico el pan",
            horario: "L a D de 8 a 23",
            salarioDesde: 200,
            salarioHasta: 500,
            lugar: "Panaderia",
            fechaCierre: new Date("2021-12-20T00:00:00"),
        }
        ,
        {
            vacante: "Panadero",
            areaTrabajo: "Gastronomia",
            requisitosExcluyentes: "Saber hacer pan",
            funcionesTareas: "Hacer pan",
            requisitosValorar: "Que le quede rico el pan",
            horario: "L a D de 8 a 23",
            salarioDesde: 200,
            salarioHasta: 500,
            lugar: "Panaderia",
            fechaCierre: new Date("2021-12-20T00:00:00"),
        }
        ,
        {
            vacante: "Panadero",
            areaTrabajo: "Gastronomia",
            requisitosExcluyentes: "Saber hacer pan",
            funcionesTareas: "Hacer pan",
            requisitosValorar: "Que le quede rico el pan",
            horario: "L a D de 8 a 23",
            salarioDesde: 200,
            salarioHasta: 500,
            lugar: "Panaderia",
            fechaCierre: new Date("2021-12-20T00:00:00"),
        }
    ]
}