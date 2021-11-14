import { Repository } from "typeorm";
import { Novedad } from "../../src/models/Novedad";

export class NovedadTest {

    static tokenAdmin: string;

    static novedadSeed = async (repositorio: Repository<Novedad>) => {

        let novedad1 = new Novedad();

        Object.assign(novedad1, { titulo: "Novedad 1", contenido: "Contenido" });
        await repositorio.save(novedad1);

        let novedad2 = new Novedad();

        Object.assign(novedad2, { titulo: "Novedad 2", contenido: "Contenido" });
        await repositorio.save(novedad2);

    }
}
