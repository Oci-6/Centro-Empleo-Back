import { getRepository } from "typeorm"
import { Pais } from "../models/Pais"
import { Departamento } from "../models/Departamento"
import { Localidad } from "../models/Localidad"
import * as helperPais from "../helpers/pais.helper"
import { Admin } from "../models/Admin"
import { encrypt } from "./encriptacion"
import { localidades } from "./localidades"

export const startUp = async () => {
    if (await getRepository(Pais).count() === 0) {
        let paises = [{ nombre: "Afganistán" }, { nombre: "Albania" }, { nombre: "Alemania" }, { nombre: "Andorra" }, { nombre: "Angola" }, { nombre: "Antigua y Barbuda" }, { nombre: "Arabia Saudita" }, { nombre: "Argelia" }, { nombre: "Argentina" }, { nombre: "Armenia" }, { nombre: "Australia" }, { nombre: "Austria" }, { nombre: "Azerbaiyán" }, { nombre: "Bahamas" }, { nombre: "Bangladés" }, { nombre: "Barbados" }, { nombre: "Baréin" }, { nombre: "Bélgica" }, { nombre: "Belice" }, { nombre: "Benín" }, { nombre: "Bielorrusia" }, { nombre: "Birmania" }, { nombre: "Bolivia" }, { nombre: "Bosnia y Herzegovina" }, { nombre: "Botsuana" }, { nombre: "Brasil" }, { nombre: "Brunéi" }, { nombre: "Bulgaria" }, { nombre: "Burkina Faso" }, { nombre: "Burundi" }, { nombre: "Bután" }, { nombre: "Cabo Verde" }, { nombre: "Camboya" }, { nombre: "Camerún" }, { nombre: "Canadá" }, { nombre: "Catar" }, { nombre: "Chad" }, { nombre: "Chile" }, { nombre: "China" }, { nombre: "Chipre" }, { nombre: "Ciudad del Vaticano" }, { nombre: "Colombia" }, { nombre: "Comoras" }, { nombre: "Corea del Norte" }, { nombre: "Corea del Sur" }, { nombre: "Costa de Marfil" }, { nombre: "Costa Rica" }, { nombre: "Croacia" }, { nombre: "Cuba" }, { nombre: "Dinamarca" }, { nombre: "Dominica" }, { nombre: "Ecuador" }, { nombre: "Egipto" }, { nombre: "El Salvador" }, { nombre: "Emiratos Árabes Unidos" }, { nombre: "Eritrea" }, { nombre: "Eslovaquia" }, { nombre: "Eslovenia" }, { nombre: "España" }, { nombre: "Estados Unidos" }, { nombre: "Estonia" }, { nombre: "Etiopía" }, { nombre: "Filipinas" }, { nombre: "Finlandia" }, { nombre: "Fiyi" }, { nombre: "Francia" }, { nombre: "Gabón" }, { nombre: "Gambia" }, { nombre: "Georgia" }, { nombre: "Ghana" }, { nombre: "Granada" }, { nombre: "Grecia" }, { nombre: "Guatemala" }, { nombre: "Guyana" }, { nombre: "Guinea" }, { nombre: "Guinea ecuatorial" }, { nombre: "Guinea-Bisáu" }, { nombre: "Haití" }, { nombre: "Honduras" }, { nombre: "Hungría" }, { nombre: "India" }, { nombre: "Indonesia" }, { nombre: "Irak" }, { nombre: "Irán" }, { nombre: "Irlanda" }, { nombre: "Islandia" }, { nombre: "Islas Marshall" }, { nombre: "Islas Salomón" }, { nombre: "Israel" }, { nombre: "Italia" }, { nombre: "Jamaica" }, { nombre: "Japón" }, { nombre: "Jordania" }, { nombre: "Kazajistán" }, { nombre: "Kenia" }, { nombre: "Kirguistán" }, { nombre: "Kiribati" }, { nombre: "Kuwait" }, { nombre: "Laos" }, { nombre: "Lesoto" }, { nombre: "Letonia" }, { nombre: "Líbano" }, { nombre: "Liberia" }, { nombre: "Libia" }, { nombre: "Liechtenstein" }, { nombre: "Lituania" }, { nombre: "Luxemburgo" }, { nombre: "Madagascar" }, { nombre: "Malasia" }, { nombre: "Malaui" }, { nombre: "Maldivas" }, { nombre: "Malí" }, { nombre: "Malta" }, { nombre: "Marruecos" }, { nombre: "Mauricio" }, { nombre: "Mauritania" }, { nombre: "México" }, { nombre: "Micronesia" }, { nombre: "Moldavia" }, { nombre: "Mónaco" }, { nombre: "Mongolia" }, { nombre: "Montenegro" }, { nombre: "Mozambique" }, { nombre: "Namibia" }, { nombre: "Nauru" }, { nombre: "Nepal" }, { nombre: "Nicaragua" }, { nombre: "Níger" }, { nombre: "Nigeria" }, { nombre: "Noruega" }, { nombre: "Nueva Zelanda" }, { nombre: "Omán" }, { nombre: "Países Bajos" }, { nombre: "Pakistán" }, { nombre: "Palaos" }, { nombre: "Panamá" }, { nombre: "Papúa Nueva Guinea" }, { nombre: "Paraguay" }, { nombre: "Perú" }, { nombre: "Polonia" }, { nombre: "Portugal" }, { nombre: "Reino Unido" }, { nombre: "República Centroafricana" }, { nombre: "República Checa" }, { nombre: "República de Macedonia" }, { nombre: "República del Congo" }, { nombre: "República Democrática del Congo" }, { nombre: "República Dominicana" }, { nombre: "República Sudafricana" }, { nombre: "Ruanda" }, { nombre: "Rumanía" }, { nombre: "Rusia" }, { nombre: "Samoa" }, { nombre: "San Cristóbal y Nieves" }, { nombre: "San Marino" }, { nombre: "San Vicente y las Granadinas" }, { nombre: "Santa Lucía" }, { nombre: "Santo Tomé y Príncipe" }, { nombre: "Senegal" }, { nombre: "Serbia" }, { nombre: "Seychelles" }, { nombre: "Sierra Leona" }, { nombre: "Singapur" }, { nombre: "Siria" }, { nombre: "Somalia" }, { nombre: "Sri Lanka" }, { nombre: "Suazilandia" }, { nombre: "Sudán" }, { nombre: "Sudán del Sur" }, { nombre: "Suecia" }, { nombre: "Suiza" }, { nombre: "Surinam" }, { nombre: "Tailandia" }, { nombre: "Tanzania" }, { nombre: "Tayikistán" }, { nombre: "Timor Oriental" }, { nombre: "Togo" }, { nombre: "Tonga" }, { nombre: "Trinidad y Tobago" }, { nombre: "Túnez" }, { nombre: "Turkmenistán" }, { nombre: "Turquía" }, { nombre: "Tuvalu" }, { nombre: "Ucrania" }, { nombre: "Uganda" }, { nombre: "Uruguay" }, { nombre: "Uzbekistán" }, { nombre: "Vanuatu" }, { nombre: "Venezuela" }, { nombre: "Vietnam" }, { nombre: "Yemen" }, { nombre: "Yibuti" }, { nombre: "Zambia" }, { nombre: "Zimbabue" }];      
        await getRepository(Pais).save(paises);

    }
    if(await getRepository(Departamento).count() === 0){
        let uruguay = await helperPais.getByNombre("Uruguay");

        let departamentos = [{nombre: "Artigas",pais: uruguay},{nombre: "Canelones",pais: uruguay},{nombre: "Cerro Largo",pais: uruguay},{nombre: "Colonia",pais: uruguay},{nombre: "Durazno",pais: uruguay},{nombre: "Flores",pais: uruguay},{nombre: "Florida",pais: uruguay},{nombre: "Lavalleja",pais: uruguay},{nombre: "Maldonado",pais: uruguay},{nombre: "Montevideo",pais: uruguay},{nombre: "Paysandú",pais: uruguay},{nombre: "Río Negro",pais: uruguay},{nombre: "Rivera",pais: uruguay},{nombre: "Rocha",pais: uruguay},{nombre: "Salto",pais: uruguay},{nombre: "San José",pais: uruguay},{nombre: "Soriano",pais: uruguay},{nombre: "Tacuarembo",pais: uruguay},{nombre: "Treinta y Tres",pais: uruguay},];
        await getRepository(Departamento).save(departamentos);
        

    }

    if(await getRepository(Localidad).count() === 0){
        let localidad: any = await localidades();
       await getRepository(Localidad).save(localidad);
        

    }

    if(await getRepository(Admin).count() === 0){

        let admin: Admin = new Admin()

        admin.email = "admin@admin.com";
        admin.contraseña = await encrypt("12345")

        await getRepository(Admin).save(admin);

    }

    const fs = require('fs');

    // check if directory exists
    let path = 'uploads/postulantes/documentos'
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true })
    } 
    path = 'uploads/postulantes/imagenes'
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true })
    } 
}


