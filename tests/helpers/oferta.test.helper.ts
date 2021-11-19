import { Repository } from "typeorm";
import { Oferta } from "../../src/models/Oferta";

export class OfertaTest {

    static tokenAdmin: string;

    static OfertaSeed = async (repositorio: Repository<Oferta>) => {

        let Oferta1: any = new Oferta();

        Oferta1 = {
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
            empresaId: 1
        }

        await repositorio.save(Oferta1);

    }
}
