import { getRepository } from "typeorm"
import { Departamento } from "../models/Departamento"


export const localidades = async () => {
const montevideo = await getRepository(Departamento).findOne({where: {nombre: 'Montevideo'}})
const artigas = await getRepository(Departamento).findOne({where: {nombre: 'Artigas'}})
const canelones = await getRepository(Departamento).findOne({where: {nombre: 'Canelones'}})
const cerrolargo = await getRepository(Departamento).findOne({where: {nombre: 'Cerro Largo'}})
const colonia = await getRepository(Departamento).findOne({where: {nombre: 'Colonia'}})
const durazno = await getRepository(Departamento).findOne({where: {nombre: 'Durazno'}})
const flores = await getRepository(Departamento).findOne({where: {nombre: 'Flores'}})
const florida = await getRepository(Departamento).findOne({where: {nombre: 'Florida'}})
const lavalleja = await getRepository(Departamento).findOne({where: {nombre: 'Lavalleja'}})
const maldonado = await getRepository(Departamento).findOne({where: {nombre: 'Maldonado'}})
const paysandu = await getRepository(Departamento).findOne({where: {nombre: 'Paysandú'}})
const rionegro = await getRepository(Departamento).findOne({where: {nombre: 'Río Negro'}})
const rivera = await getRepository(Departamento).findOne({where: {nombre: 'Rivera'}})
const rocha = await getRepository(Departamento).findOne({where: {nombre: 'Rocha'}})
const salto = await getRepository(Departamento).findOne({where: {nombre: 'Salto'}})
const sanjose = await getRepository(Departamento).findOne({where: {nombre: 'San José'}})
const soriano = await getRepository(Departamento).findOne({where: {nombre: 'Soriano'}})
const tacuarembo = await getRepository(Departamento).findOne({where: {nombre: 'Tacuarembo'}})
const treintaytres = await getRepository(Departamento).findOne({where: {nombre: 'Treinta y Tres'}})

return [
        {
            departamento: montevideo,
            nombre: "MONTEVIDEO"
        },
        {
            departamento: artigas,
            nombre: "ARTIGAS"
        },
        {
            departamento: artigas,
            nombre: "BELLA UNION"
        },
        {
            departamento: artigas,
            nombre: "TOMAS GOMENSORO"
        },
        {
            departamento: artigas,
            nombre: "BALTASAR BRUM"
        },
        {
            departamento: artigas,
            nombre: "BERNABE RIVERA"
        },
        {
            departamento: artigas,
            nombre: "FRANQUIA"
        },
        {
            departamento: artigas,
            nombre: "SEQUEIRA"
        },
        {
            departamento: artigas,
            nombre: "CORONADO"
        },
        {
            departamento: artigas,
            nombre: "CUAREIM"
        },
        {
            departamento: artigas,
            nombre: "CUARO"
        },
        {
            departamento: artigas,
            nombre: "JAVIER DE VIANA"
        },
        {
            departamento: artigas,
            nombre: "LA BOLSA"
        },
        {
            departamento: artigas,
            nombre: "LAS PIEDRAS"
        },
        {
            departamento: artigas,
            nombre: "PINTADITO"
        },
        {
            departamento: artigas,
            nombre: "PORT. DE HIERRO Y CAMPODONICO"
        },
        {
            departamento: artigas,
            nombre: "MONES QUINTELA"
        },
        {
            departamento: artigas,
            nombre: "CAINSA"
        },
        {
            departamento: artigas,
            nombre: "PASO CAMPAMENTO"
        },
        {
            departamento: artigas,
            nombre: "DIEGO LAMAS"
        },
        {
            departamento: artigas,
            nombre: "PASO FARIAS"
        },
        {
            departamento: artigas,
            nombre: "RINCON DE PACHECO"
        },
        {
            departamento: artigas,
            nombre: "TOPADOR"
        },
        {
            departamento: artigas,
            nombre: "CERRO EJIDO"
        },
        {
            departamento: artigas,
            nombre: "COLONIA PALMA"
        },
        {
            departamento: artigas,
            nombre: "CERRO SIGNORELLI (EL MIRADOR)"
        },
        {
            departamento: artigas,
            nombre: "CERRO SAN EUGENIO"
        },
        {
            departamento: artigas,
            nombre: "CALNU"
        },
        {
            departamento: canelones,
            nombre: "LAS PIEDRAS"
        },
        {
            departamento: canelones,
            nombre: "CANELONES"
        },
        {
            departamento: canelones,
            nombre: "LA PAZ"
        },
        {
            departamento: canelones,
            nombre: "PANDO"
        },
        {
            departamento: canelones,
            nombre: "SANTA LUCIA"
        },
        {
            departamento: canelones,
            nombre: "PIEDRAS DE AFILAR"
        },
        {
            departamento: canelones,
            nombre: "CUMBRES DE CARRASCO"
        },
        {
            departamento: canelones,
            nombre: "HARAS DEL LAGO"
        },
        {
            departamento: canelones,
            nombre: "QUINTA LOS HORNEROS"
        },
        {
            departamento: canelones,
            nombre: "LAS HIGUERITAS"
        },
        {
            departamento: canelones,
            nombre: "SOFIA SANTOS"
        },
        {
            departamento: canelones,
            nombre: "PROGRESO"
        },
        {
            departamento: canelones,
            nombre: "SAN RAMON"
        },
        {
            departamento: canelones,
            nombre: "BARROS BLANCOS"
        },
        {
            departamento: canelones,
            nombre: "COLONIA NICOLICH"
        },
        {
            departamento: canelones,
            nombre: "JOAQUIN SUAREZ"
        },
        {
            departamento: canelones,
            nombre: "PASO CARRASCO"
        },
        {
            departamento: canelones,
            nombre: "SANTA ROSA"
        },
        {
            departamento: canelones,
            nombre: "SAUCE"
        },
        {
            departamento: canelones,
            nombre: "TALA"
        },
        {
            departamento: canelones,
            nombre: "VILLA CRESPO Y SAN ANDRES"
        },
        {
            departamento: canelones,
            nombre: "FRACC. CNO. ANDALUZ Y R.84"
        },
        {
            departamento: canelones,
            nombre: "ATLANTIDA"
        },
        {
            departamento: canelones,
            nombre: "ESTACION ATLANTIDA"
        },
        {
            departamento: canelones,
            nombre: "CERRILLOS"
        },
        {
            departamento: canelones,
            nombre: "EMPALME OLMOS"
        },
        {
            departamento: canelones,
            nombre: "MIGUES"
        },
        {
            departamento: canelones,
            nombre: "PARQUE DEL PLATA"
        },
        {
            departamento: canelones,
            nombre: "SAN BAUTISTA"
        },
        {
            departamento: canelones,
            nombre: "SAN JACINTO"
        },
        {
            departamento: canelones,
            nombre: "DR. FRANCISCO SOCA"
        },
        {
            departamento: canelones,
            nombre: "TOLEDO"
        },
        {
            departamento: canelones,
            nombre: "MONTES"
        },
        {
            departamento: canelones,
            nombre: "SAN JOSE DE CARRASCO"
        },
        {
            departamento: canelones,
            nombre: "FRACC. SOBRE RUTA 74"
        },
        {
            departamento: canelones,
            nombre: "AGUAS CORRIENTES"
        },
        {
            departamento: canelones,
            nombre: "BARRA DE CARRASCO"
        },
        {
            departamento: canelones,
            nombre: "JUANICO"
        },
        {
            departamento: canelones,
            nombre: "LA FLORESTA"
        },
        {
            departamento: canelones,
            nombre: "ESTACION LA FLORESTA"
        },
        {
            departamento: canelones,
            nombre: "LAS TOSCAS"
        },
        {
            departamento: canelones,
            nombre: "PARQUE CARRASCO"
        },
        {
            departamento: canelones,
            nombre: "SALINAS"
        },
        {
            departamento: canelones,
            nombre: "SAN ANTONIO"
        },
        {
            departamento: canelones,
            nombre: "AEROPUERTO INTERNACIONAL DE CARRAS"
        },
        {
            departamento: canelones,
            nombre: "SOLYMAR"
        },
        {
            departamento: canelones,
            nombre: "VILLA AEROPARQUE"
        },
        {
            departamento: canelones,
            nombre: "CASTELLANOS"
        },
        {
            departamento: canelones,
            nombre: "BARRIO COPOLA"
        },
        {
            departamento: canelones,
            nombre: "COSTA AZUL"
        },
        {
            departamento: canelones,
            nombre: "COSTA Y GUILLAMON"
        },
        {
            departamento: canelones,
            nombre: "EL PINAR"
        },
        {
            departamento: canelones,
            nombre: "ESTACION MIGUES"
        },
        {
            departamento: canelones,
            nombre: "PINAMAR - PINEPARK"
        },
        {
            departamento: canelones,
            nombre: "LAGOMAR"
        },
        {
            departamento: canelones,
            nombre: "OLMOS"
        },
        {
            departamento: canelones,
            nombre: "PARADA CABRERA"
        },
        {
            departamento: canelones,
            nombre: "SAN LUIS"
        },
        {
            departamento: canelones,
            nombre: "SHANGRILA"
        },
        {
            departamento: canelones,
            nombre: "TOTORAL DEL SAUCE"
        },
        {
            departamento: canelones,
            nombre: "VILLA FELICIDAD"
        },
        {
            departamento: canelones,
            nombre: "VILLA PAZ S.A."
        },
        {
            departamento: canelones,
            nombre: "VILLA SAN JOSE"
        },
        {
            departamento: canelones,
            nombre: "ESTACION TAPIA"
        },
        {
            departamento: canelones,
            nombre: "VILLA SAN FELIPE"
        },
        {
            departamento: canelones,
            nombre: "VILLA HADITA"
        },
        {
            departamento: canelones,
            nombre: "PASO DE PACHE"
        },
        {
            departamento: canelones,
            nombre: "CITY GOLF"
        },
        {
            departamento: canelones,
            nombre: "VIEJO MOLINO SAN BERNARDO"
        },
        {
            departamento: canelones,
            nombre: "ESTANQUE DE PANDO"
        },
        {
            departamento: canelones,
            nombre: "JARDINES DE PANDO"
        },
        {
            departamento: canelones,
            nombre: "PASO ESPINOSA"
        },
        {
            departamento: canelones,
            nombre: "ARAMINDA"
        },
        {
            departamento: canelones,
            nombre: "ARGENTINO"
        },
        {
            departamento: canelones,
            nombre: "BELLO HORIZONTE"
        },
        {
            departamento: canelones,
            nombre: "BIARRITZ"
        },
        {
            departamento: canelones,
            nombre: "BOLIVAR"
        },
        {
            departamento: canelones,
            nombre: "CAMPO MILITAR"
        },
        {
            departamento: canelones,
            nombre: "CAPILLA DE CELLA"
        },
        {
            departamento: canelones,
            nombre: "CRUZ DE LOS CAMINOS"
        },
        {
            departamento: canelones,
            nombre: "CUCHILLA ALTA"
        },
        {
            departamento: canelones,
            nombre: "EL BOSQUE"
        },
        {
            departamento: canelones,
            nombre: "ESTACION PEDRERA"
        },
        {
            departamento: canelones,
            nombre: "FORTIN DE SANTA ROSA"
        },
        {
            departamento: canelones,
            nombre: "FRACC. PROGRESO"
        },
        {
            departamento: canelones,
            nombre: "INSTITUTO ADVENTISTA"
        },
        {
            departamento: canelones,
            nombre: "JAUREGUIBERRY"
        },
        {
            departamento: canelones,
            nombre: "LA LUCHA"
        },
        {
            departamento: canelones,
            nombre: "LA MONTAÑESA"
        },
        {
            departamento: canelones,
            nombre: "LOMAS DE SOLYMAR"
        },
        {
            departamento: canelones,
            nombre: "LOS TITANES"
        },
        {
            departamento: canelones,
            nombre: "MARINDIA"
        },
        {
            departamento: canelones,
            nombre: "NEPTUNIA"
        },
        {
            departamento: canelones,
            nombre: "PASO DE LA CADENA"
        },
        {
            departamento: canelones,
            nombre: "PASO PALOMEQUE"
        },
        {
            departamento: canelones,
            nombre: "PIEDRA DEL TORO"
        },
        {
            departamento: canelones,
            nombre: "ESTACION PIEDRAS DE AFILAR"
        },
        {
            departamento: canelones,
            nombre: "EL GALEON"
        },
        {
            departamento: canelones,
            nombre: "SANTA ANA"
        },
        {
            departamento: canelones,
            nombre: "SANTA LUCIA DEL ESTE"
        },
        {
            departamento: canelones,
            nombre: "SEIS HERMANOS"
        },
        {
            departamento: canelones,
            nombre: "VILLA AREJO"
        },
        {
            departamento: canelones,
            nombre: "VILLA ARGENTINA"
        },
        {
            departamento: canelones,
            nombre: "VILLA PORVENIR"
        },
        {
            departamento: canelones,
            nombre: "LA TUNA"
        },
        {
            departamento: canelones,
            nombre: "GUAZU - VIRA"
        },
        {
            departamento: canelones,
            nombre: "COLINAS DE SOLYMAR"
        },
        {
            departamento: canelones,
            nombre: "BARRIO REMANSO"
        },
        {
            departamento: canelones,
            nombre: "VILLA EL TATO"
        },
        {
            departamento: canelones,
            nombre: "VILLA SAN CONO"
        },
        {
            departamento: canelones,
            nombre: "VILLA JUANA"
        },
        {
            departamento: canelones,
            nombre: "COLINAS DE CARRASCO"
        },
        {
            departamento: canelones,
            nombre: "LOMAS DE CARRASCO"
        },
        {
            departamento: canelones,
            nombre: "CARMEL"
        },
        {
            departamento: canelones,
            nombre: "LA ASUNCION"
        },
        {
            departamento: canelones,
            nombre: "QUINTAS DEL BOSQUE"
        },
        {
            departamento: canelones,
            nombre: "ALTOS DE LA TAHONA"
        },
        {
            departamento: cerrolargo,
            nombre: "MELO"
        },
        {
            departamento: cerrolargo,
            nombre: "FRAILE MUERTO"
        },
        {
            departamento: cerrolargo,
            nombre: "RIO BRANCO"
        },
        {
            departamento: cerrolargo,
            nombre: "TUPAMBAE"
        },
        {
            departamento: cerrolargo,
            nombre: "ISIDORO NOBLIA"
        },
        {
            departamento: cerrolargo,
            nombre: "ACEGUA"
        },
        {
            departamento: cerrolargo,
            nombre: "BAÑADO DE MEDINA"
        },
        {
            departamento: cerrolargo,
            nombre: "CENTURION"
        },
        {
            departamento: cerrolargo,
            nombre: "CERRO DE LAS CUENTAS"
        },
        {
            departamento: cerrolargo,
            nombre: "HIPODROMO"
        },
        {
            departamento: cerrolargo,
            nombre: "PLACIDO ROSAS"
        },
        {
            departamento: cerrolargo,
            nombre: "TOLEDO"
        },
        {
            departamento: cerrolargo,
            nombre: "TRES ISLAS"
        },
        {
            departamento: cerrolargo,
            nombre: "POBLADO URUGUAY"
        },
        {
            departamento: cerrolargo,
            nombre: "ARBOLITO"
        },
        {
            departamento: cerrolargo,
            nombre: "AREVALO"
        },
        {
            departamento: cerrolargo,
            nombre: "CASERIO LAS CAÑAS"
        },
        {
            departamento: cerrolargo,
            nombre: "ESPERANZA"
        },
        {
            departamento: cerrolargo,
            nombre: "GETULIO VARGAS"
        },
        {
            departamento: cerrolargo,
            nombre: "LA PEDRERA"
        },
        {
            departamento: cerrolargo,
            nombre: "LAGO MERIN"
        },
        {
            departamento: cerrolargo,
            nombre: "MANGRULLO"
        },
        {
            departamento: cerrolargo,
            nombre: "NANDO"
        },
        {
            departamento: cerrolargo,
            nombre: "QUEBRACHO"
        },
        {
            departamento: cerrolargo,
            nombre: "RAMON TRIGO"
        },
        {
            departamento: cerrolargo,
            nombre: "SOTO GORO"
        },
        {
            departamento: cerrolargo,
            nombre: "BARRIO LOPEZ BENITEZ"
        },
        {
            departamento: cerrolargo,
            nombre: "BARRIO LA VINCHUCA"
        },
        {
            departamento: cerrolargo,
            nombre: "ARACHANIA"
        },
        {
            departamento: cerrolargo,
            nombre: "ÑANGAPIRE"
        },
        {
            departamento: colonia,
            nombre: "COLONIA DEL SACRAMENTO"
        },
        {
            departamento: colonia,
            nombre: "CARMELO"
        },
        {
            departamento: colonia,
            nombre: "JUAN LACAZE"
        },
        {
            departamento: colonia,
            nombre: "NUEVA HELVECIA"
        },
        {
            departamento: colonia,
            nombre: "ROSARIO"
        },
        {
            departamento: colonia,
            nombre: "NUEVA PALMIRA"
        },
        {
            departamento: colonia,
            nombre: "PASO ANTOLIN"
        },
        {
            departamento: colonia,
            nombre: "OMBUES DE LAVALLE"
        },
        {
            departamento: colonia,
            nombre: "TARARIRAS"
        },
        {
            departamento: colonia,
            nombre: "COLONIA VALDENSE"
        },
        {
            departamento: colonia,
            nombre: "FLORENCIO SANCHEZ"
        },
        {
            departamento: colonia,
            nombre: "CONCHILLAS"
        },
        {
            departamento: colonia,
            nombre: "CASERIO EL CERRO"
        },
        {
            departamento: colonia,
            nombre: "LA PAZ"
        },
        {
            departamento: colonia,
            nombre: "RIACHUELO"
        },
        {
            departamento: colonia,
            nombre: "JUAN CARLOS CASEROS"
        },
        {
            departamento: colonia,
            nombre: "AGRACIADA"
        },
        {
            departamento: colonia,
            nombre: "BOCA DEL ROSARIO"
        },
        {
            departamento: colonia,
            nombre: "CUFRE"
        },
        {
            departamento: colonia,
            nombre: "EL SEMILLERO"
        },
        {
            departamento: colonia,
            nombre: "ESTACION ESTANZUELA"
        },
        {
            departamento: colonia,
            nombre: "CERROS DE SAN JUAN"
        },
        {
            departamento: colonia,
            nombre: "MIGUELETE"
        },
        {
            departamento: colonia,
            nombre: "CAMPANA"
        },
        {
            departamento: colonia,
            nombre: "ARTILLEROS"
        },
        {
            departamento: colonia,
            nombre: "BARKER"
        },
        {
            departamento: colonia,
            nombre: "EL ENSUEÑO"
        },
        {
            departamento: colonia,
            nombre: "BLANCA ARENA"
        },
        {
            departamento: colonia,
            nombre: "BRISAS DEL PLATA"
        },
        {
            departamento: colonia,
            nombre: "COLONIA COSMOPOLITA"
        },
        {
            departamento: colonia,
            nombre: "PARAJE MINUANO"
        },
        {
            departamento: colonia,
            nombre: "LOS PINOS"
        },
        {
            departamento: colonia,
            nombre: "CHICO TORINO"
        },
        {
            departamento: colonia,
            nombre: "LA HORQUETA"
        },
        {
            departamento: colonia,
            nombre: "PLAYA AZUL"
        },
        {
            departamento: colonia,
            nombre: "PLAYA BRITOPOLIS"
        },
        {
            departamento: colonia,
            nombre: "PLAYA PARANT"
        },
        {
            departamento: colonia,
            nombre: "PLAYA FOMENTO"
        },
        {
            departamento: colonia,
            nombre: "PUERTO INGLES"
        },
        {
            departamento: colonia,
            nombre: "RADIAL HERNANDEZ"
        },
        {
            departamento: colonia,
            nombre: "SAN PEDRO"
        },
        {
            departamento: colonia,
            nombre: "SANTA ANA"
        },
        {
            departamento: colonia,
            nombre: "SANTA REGINA"
        },
        {
            departamento: colonia,
            nombre: "ZAGARZAZU"
        },
        {
            departamento: colonia,
            nombre: "ARRIVILLAGA"
        },
        {
            departamento: colonia,
            nombre: "EL FARO"
        },
        {
            departamento: colonia,
            nombre: "LAGUNA DE LOS PATOS"
        },
        {
            departamento: colonia,
            nombre: "JUAN JACKSON"
        },
        {
            departamento: colonia,
            nombre: "PUEBLO GIL"
        },
        {
            departamento: colonia,
            nombre: "CERRO CARMELO"
        },
        {
            departamento: colonia,
            nombre: "EL QUINTON"
        },
        {
            departamento: durazno,
            nombre: "DURAZNO"
        },
        {
            departamento: durazno,
            nombre: "SARANDI DEL YI"
        },
        {
            departamento: durazno,
            nombre: "CARMEN"
        },
        {
            departamento: durazno,
            nombre: "BLANQUILLO"
        },
        {
            departamento: durazno,
            nombre: "LA PALOMA"
        },
        {
            departamento: durazno,
            nombre: "CARLOS REYLES"
        },
        {
            departamento: durazno,
            nombre: "CENTENARIO"
        },
        {
            departamento: durazno,
            nombre: "SANTA BERNARDINA"
        },
        {
            departamento: durazno,
            nombre: "CERRO CHATO"
        },
        {
            departamento: durazno,
            nombre: "BAYGORRIA"
        },
        {
            departamento: durazno,
            nombre: "AGUAS BUENAS"
        },
        {
            departamento: durazno,
            nombre: "PUEBLO DE ALVAREZ"
        },
        {
            departamento: durazno,
            nombre: "FELICIANO"
        },
        {
            departamento: durazno,
            nombre: "OMBUES DE ORIBE"
        },
        {
            departamento: durazno,
            nombre: "ROSSELL Y RIUS"
        },
        {
            departamento: durazno,
            nombre: "SAN JORGE"
        },
        {
            departamento: durazno,
            nombre: "LAS PALMAS"
        },
        {
            departamento: flores,
            nombre: "TRINIDAD"
        },
        {
            departamento: flores,
            nombre: "ISMAEL CORTINAS"
        },
        {
            departamento: flores,
            nombre: "ANDRESITO"
        },
        {
            departamento: flores,
            nombre: "JUAN JOSE CASTRO"
        },
        {
            departamento: flores,
            nombre: "LA CASILLA"
        },
        {
            departamento: flores,
            nombre: "CERRO COLORADO"
        },
        {
            departamento: florida,
            nombre: "FLORIDA"
        },
        {
            departamento: florida,
            nombre: "SARANDI GRANDE"
        },
        {
            departamento: florida,
            nombre: "CASUPA"
        },
        {
            departamento: florida,
            nombre: "CARDAL"
        },
        {
            departamento: florida,
            nombre: "FRAY MARCOS"
        },
        {
            departamento: florida,
            nombre: "25 DE AGOSTO"
        },
        {
            departamento: florida,
            nombre: "25 DE MAYO"
        },
        {
            departamento: florida,
            nombre: "ALEJANDRO GALLINAL"
        },
        {
            departamento: florida,
            nombre: "CAPILLA DEL SAUCE"
        },
        {
            departamento: florida,
            nombre: "LA CRUZ"
        },
        {
            departamento: florida,
            nombre: "NICO PEREZ"
        },
        {
            departamento: florida,
            nombre: "CERRO CHATO"
        },
        {
            departamento: florida,
            nombre: "CHAMIZO"
        },
        {
            departamento: florida,
            nombre: "GOÑI"
        },
        {
            departamento: florida,
            nombre: "MENDOZA"
        },
        {
            departamento: florida,
            nombre: "MENDOZA CHICO"
        },
        {
            departamento: florida,
            nombre: "REBOLEDO"
        },
        {
            departamento: florida,
            nombre: "VALENTINES"
        },
        {
            departamento: florida,
            nombre: "BERRONDO"
        },
        {
            departamento: florida,
            nombre: "PUEBLO FERRER"
        },
        {
            departamento: florida,
            nombre: "INDEPENDENCIA"
        },
        {
            departamento: florida,
            nombre: "MONTECORAL"
        },
        {
            departamento: florida,
            nombre: "PINTADO"
        },
        {
            departamento: florida,
            nombre: "POLANCO DEL YI"
        },
        {
            departamento: florida,
            nombre: "PUNTAS DE MACIEL"
        },
        {
            departamento: florida,
            nombre: "ILLESCAS"
        },
        {
            departamento: florida,
            nombre: "CASERIO LA FUNDACION"
        },
        {
            departamento: florida,
            nombre: "LA MACANA"
        },
        {
            departamento: florida,
            nombre: "ESTACION CAPILLA DEL SAUCE"
        },
        {
            departamento: florida,
            nombre: "SAN GABRIEL"
        },
        {
            departamento: lavalleja,
            nombre: "MINAS"
        },
        {
            departamento: lavalleja,
            nombre: "JOSE BATLLE Y ORDOÑEZ"
        },
        {
            departamento: lavalleja,
            nombre: "JOSE PEDRO VARELA"
        },
        {
            departamento: lavalleja,
            nombre: "MARISCALA"
        },
        {
            departamento: lavalleja,
            nombre: "SOLIS DE MATAOJO"
        },
        {
            departamento: lavalleja,
            nombre: "PIRARAJA"
        },
        {
            departamento: lavalleja,
            nombre: "ZAPICAN"
        },
        {
            departamento: lavalleja,
            nombre: "COLON"
        },
        {
            departamento: lavalleja,
            nombre: "ARAMENDIA"
        },
        {
            departamento: lavalleja,
            nombre: "BLANES VIALE"
        },
        {
            departamento: lavalleja,
            nombre: "19 DE JUNIO"
        },
        {
            departamento: lavalleja,
            nombre: "ESTACION SOLIS"
        },
        {
            departamento: lavalleja,
            nombre: "GAETAN"
        },
        {
            departamento: lavalleja,
            nombre: "POLANCO NORTE"
        },
        {
            departamento: lavalleja,
            nombre: "VILLA DEL ROSARIO"
        },
        {
            departamento: lavalleja,
            nombre: "VILLA SERRANA"
        },
        {
            departamento: lavalleja,
            nombre: "BARRIO LA CORONILLA - ANCAP"
        },
        {
            departamento: lavalleja,
            nombre: "SAN FRANCISCO DE LAS SIERRAS"
        },
        {
            departamento: lavalleja,
            nombre: "ILLESCAS"
        },
        {
            departamento: maldonado,
            nombre: "MALDONADO"
        },
        {
            departamento: maldonado,
            nombre: "SAN CARLOS"
        },
        {
            departamento: maldonado,
            nombre: "AIGUA"
        },
        {
            departamento: maldonado,
            nombre: "PAN DE AZUCAR"
        },
        {
            departamento: maldonado,
            nombre: "PIRIAPOLIS"
        },
        {
            departamento: maldonado,
            nombre: "PUNTA DEL ESTE"
        },
        {
            departamento: maldonado,
            nombre: "CERRO PELADO"
        },
        {
            departamento: maldonado,
            nombre: "GARZON"
        },
        {
            departamento: maldonado,
            nombre: "GERONA"
        },
        {
            departamento: maldonado,
            nombre: "LAS FLORES - ESTACION"
        },
        {
            departamento: maldonado,
            nombre: "LOS TALAS"
        },
        {
            departamento: maldonado,
            nombre: "NUEVA CARRARA"
        },
        {
            departamento: maldonado,
            nombre: "SOLIS"
        },
        {
            departamento: maldonado,
            nombre: "PUEBLO SOLIS"
        },
        {
            departamento: maldonado,
            nombre: "PINARES - LAS DELICIAS"
        },
        {
            departamento: maldonado,
            nombre: "CHIHUAHUA"
        },
        {
            departamento: maldonado,
            nombre: "VILLA DELIA"
        },
        {
            departamento: maldonado,
            nombre: "SAN RAFAEL - EL PLACER"
        },
        {
            departamento: maldonado,
            nombre: "BARRIO HIPODROMO"
        },
        {
            departamento: maldonado,
            nombre: "LOS AROMOS"
        },
        {
            departamento: maldonado,
            nombre: "BELLA VISTA"
        },
        {
            departamento: maldonado,
            nombre: "CANTERAS DE MARELLI"
        },
        {
            departamento: maldonado,
            nombre: "CERROS AZULES"
        },
        {
            departamento: maldonado,
            nombre: "EL CHORRO"
        },
        {
            departamento: maldonado,
            nombre: "EL EDEN"
        },
        {
            departamento: maldonado,
            nombre: "EL TESORO"
        },
        {
            departamento: maldonado,
            nombre: "FARO JOSE IGNACIO"
        },
        {
            departamento: maldonado,
            nombre: "GREGORIO AZNAREZ"
        },
        {
            departamento: maldonado,
            nombre: "LA BARRA"
        },
        {
            departamento: maldonado,
            nombre: "LA CAPUERA"
        },
        {
            departamento: maldonado,
            nombre: "LAS FLORES"
        },
        {
            departamento: maldonado,
            nombre: "MANANTIALES"
        },
        {
            departamento: maldonado,
            nombre: "OCEAN PARK"
        },
        {
            departamento: maldonado,
            nombre: "PLAYA GRANDE"
        },
        {
            departamento: maldonado,
            nombre: "PLAYA HERMOSA"
        },
        {
            departamento: maldonado,
            nombre: "PLAYA VERDE"
        },
        {
            departamento: maldonado,
            nombre: "PUNTA BALLENA"
        },
        {
            departamento: maldonado,
            nombre: "PUNTA COLORADA"
        },
        {
            departamento: maldonado,
            nombre: "PUNTA NEGRA"
        },
        {
            departamento: maldonado,
            nombre: "RUTA 37 Y 9"
        },
        {
            departamento: maldonado,
            nombre: "SAUCE DE PORTEZUELO"
        },
        {
            departamento: maldonado,
            nombre: "SAN VICENTE"
        },
        {
            departamento: maldonado,
            nombre: "BALNEARIO BUENOS AIRES"
        },
        {
            departamento: maldonado,
            nombre: "LAS CUMBRES"
        },
        {
            departamento: maldonado,
            nombre: "LOS CORCHOS"
        },
        {
            departamento: maldonado,
            nombre: "SANTA MONICA"
        },
        {
            departamento: maldonado,
            nombre: "EDEN ROCK"
        },
        {
            departamento: maldonado,
            nombre: "PARQUE MEDINA"
        },
        {
            departamento: maldonado,
            nombre: "ARENAS DE JOSE IGNACIO"
        },
        {
            departamento: maldonado,
            nombre: "LA SONRISA"
        },
        {
            departamento: maldonado,
            nombre: "EL QUIJOTE"
        },
        {
            departamento: maldonado,
            nombre: "LAGUNA BLANCA"
        },
        {
            departamento: paysandu,
            nombre: "PAYSANDU"
        },
        {
            departamento: paysandu,
            nombre: "GUICHON"
        },
        {
            departamento: paysandu,
            nombre: "NUEVO PAYSANDU"
        },
        {
            departamento: paysandu,
            nombre: "QUEBRACHO"
        },
        {
            departamento: paysandu,
            nombre: "TAMBORES"
        },
        {
            departamento: paysandu,
            nombre: "LORENZO GEYRES"
        },
        {
            departamento: paysandu,
            nombre: "MERINOS"
        },
        {
            departamento: paysandu,
            nombre: "PORVENIR"
        },
        {
            departamento: paysandu,
            nombre: "ARBOLITO"
        },
        {
            departamento: paysandu,
            nombre: "BEISSO"
        },
        {
            departamento: paysandu,
            nombre: "CASABLANCA"
        },
        {
            departamento: paysandu,
            nombre: "CERRO CHATO"
        },
        {
            departamento: paysandu,
            nombre: "CONSTANCIA"
        },
        {
            departamento: paysandu,
            nombre: "MORATO"
        },
        {
            departamento: paysandu,
            nombre: "PIEDRAS COLORADAS"
        },
        {
            departamento: paysandu,
            nombre: "PIÑERA"
        },
        {
            departamento: paysandu,
            nombre: "SAN FELIX"
        },
        {
            departamento: paysandu,
            nombre: "VILLA MARIA (TIATUCURA)"
        },
        {
            departamento: paysandu,
            nombre: "PIEDRA SOLA"
        },
        {
            departamento: paysandu,
            nombre: "ARAUJO"
        },
        {
            departamento: paysandu,
            nombre: "BELLA VISTA"
        },
        {
            departamento: paysandu,
            nombre: "CAÑADA DEL PUEBLO"
        },
        {
            departamento: paysandu,
            nombre: "CHAPICUY"
        },
        {
            departamento: paysandu,
            nombre: "EL EUCALIPTUS"
        },
        {
            departamento: paysandu,
            nombre: "ESPERANZA"
        },
        {
            departamento: paysandu,
            nombre: "PUEBLO FEDERACION"
        },
        {
            departamento: paysandu,
            nombre: "LA TENTACION"
        },
        {
            departamento: paysandu,
            nombre: "ORGOROSO"
        },
        {
            departamento: paysandu,
            nombre: "CUCHILLA DE BURICAYUPI"
        },
        {
            departamento: paysandu,
            nombre: "SOTO"
        },
        {
            departamento: paysandu,
            nombre: "ZEBALLOS"
        },
        {
            departamento: paysandu,
            nombre: "CHACRAS DE PAYSANDU"
        },
        {
            departamento: paysandu,
            nombre: "GALLINAL"
        },
        {
            departamento: paysandu,
            nombre: "PUNTAS DE ARROYO NEGRO"
        },
        {
            departamento: paysandu,
            nombre: "ESTACION PORVENIR"
        },
        {
            departamento: paysandu,
            nombre: "CUCHILLA DE FUEGO"
        },
        {
            departamento: paysandu,
            nombre: "PUEBLO ALONZO"
        },
        {
            departamento: paysandu,
            nombre: "QUEGUAYAR"
        },
        {
            departamento: paysandu,
            nombre: "TERMAS DE GUAVIYU"
        },
        {
            departamento: paysandu,
            nombre: "TERMAS DE ALMIRON"
        },
        {
            departamento: rionegro,
            nombre: "FRAY BENTOS"
        },
        {
            departamento: rionegro,
            nombre: "YOUNG"
        },
        {
            departamento: rionegro,
            nombre: "NUEVO BERLIN"
        },
        {
            departamento: rionegro,
            nombre: "SAN JAVIER"
        },
        {
            departamento: rionegro,
            nombre: "BARRIO ANGLO"
        },
        {
            departamento: rionegro,
            nombre: "GRECCO"
        },
        {
            departamento: rionegro,
            nombre: "MERINOS"
        },
        {
            departamento: rionegro,
            nombre: "ALGORTA"
        },
        {
            departamento: rionegro,
            nombre: "EL OMBU"
        },
        {
            departamento: rionegro,
            nombre: "PASO DE LOS MELLIZOS"
        },
        {
            departamento: rionegro,
            nombre: "SARANDI DE NAVARRO"
        },
        {
            departamento: rionegro,
            nombre: "VILLA GENERAL BORGES"
        },
        {
            departamento: rionegro,
            nombre: "VILLA MARIA"
        },
        {
            departamento: rionegro,
            nombre: "LAS CAÑAS"
        },
        {
            departamento: rionegro,
            nombre: "BELLACO"
        },
        {
            departamento: rionegro,
            nombre: "LOS ARRAYANES"
        },
        {
            departamento: rionegro,
            nombre: "MENAFRA"
        },
        {
            departamento: rionegro,
            nombre: "TRES QUINTAS"
        },
        {
            departamento: rivera,
            nombre: "RIVERA"
        },
        {
            departamento: rivera,
            nombre: "MINAS DE CORRALES"
        },
        {
            departamento: rivera,
            nombre: "TRANQUERAS"
        },
        {
            departamento: rivera,
            nombre: "VICHADERO"
        },
        {
            departamento: rivera,
            nombre: "SANTA TERESA"
        },
        {
            departamento: rivera,
            nombre: "ARROYO BLANCO"
        },
        {
            departamento: rivera,
            nombre: "PASO ATAQUES"
        },
        {
            departamento: rivera,
            nombre: "CERRO PELADO"
        },
        {
            departamento: rivera,
            nombre: "PASO HOSPITAL"
        },
        {
            departamento: rivera,
            nombre: "LAPUENTE"
        },
        {
            departamento: rivera,
            nombre: "LAS FLORES"
        },
        {
            departamento: rivera,
            nombre: "MOIRONES"
        },
        {
            departamento: rivera,
            nombre: "LA PEDRERA"
        },
        {
            departamento: rivera,
            nombre: "MANDUBI"
        },
        {
            departamento: rivera,
            nombre: "LAGUNON"
        },
        {
            departamento: rivera,
            nombre: "AMARILLO"
        },
        {
            departamento: rivera,
            nombre: "CERRILLADA"
        },
        {
            departamento: rivera,
            nombre: "CERROS DE LA CALERA"
        },
        {
            departamento: rivera,
            nombre: "LAGOS DEL NORTE"
        },
        {
            departamento: rivera,
            nombre: "MASOLLER"
        },
        {
            departamento: rocha,
            nombre: "ROCHA"
        },
        {
            departamento: rocha,
            nombre: "CASTILLOS"
        },
        {
            departamento: rocha,
            nombre: "LASCANO"
        },
        {
            departamento: rocha,
            nombre: "CHUY"
        },
        {
            departamento: rocha,
            nombre: "CEBOLLATI"
        },
        {
            departamento: rocha,
            nombre: "VELAZQUEZ"
        },
        {
            departamento: rocha,
            nombre: "18 DE JULIO"
        },
        {
            departamento: rocha,
            nombre: "LA PALOMA"
        },
        {
            departamento: rocha,
            nombre: "SAN LUIS AL MEDIO"
        },
        {
            departamento: rocha,
            nombre: "LA AGUADA Y COSTA AZUL"
        },
        {
            departamento: rocha,
            nombre: "19 DE ABRIL"
        },
        {
            departamento: rocha,
            nombre: "LA CORONILLA"
        },
        {
            departamento: rocha,
            nombre: "BARRIO PEREIRA"
        },
        {
            departamento: rocha,
            nombre: "AGUAS DULCES"
        },
        {
            departamento: rocha,
            nombre: "BARRA DEL CHUY"
        },
        {
            departamento: rocha,
            nombre: "BARRIO TORRES"
        },
        {
            departamento: rocha,
            nombre: "CABO POLONIO"
        },
        {
            departamento: rocha,
            nombre: "CAPACHO"
        },
        {
            departamento: rocha,
            nombre: "BARRA DE VALIZAS"
        },
        {
            departamento: rocha,
            nombre: "LA ESMERALDA"
        },
        {
            departamento: rocha,
            nombre: "LA PEDRERA"
        },
        {
            departamento: rocha,
            nombre: "PARALLE"
        },
        {
            departamento: rocha,
            nombre: "PUERTO DE LOS BOTES"
        },
        {
            departamento: rocha,
            nombre: "PUIMAYEN"
        },
        {
            departamento: rocha,
            nombre: "ARACHANIA"
        },
        {
            departamento: rocha,
            nombre: "PTA. RUBIA Y STA. ISABEL DE LA PED"
        },
        {
            departamento: rocha,
            nombre: "PUNTA DEL DIABLO"
        },
        {
            departamento: rocha,
            nombre: "PALMARES DE LA CORONILLA"
        },
        {
            departamento: rocha,
            nombre: "LA RIBIERA"
        },
        {
            departamento: rocha,
            nombre: "PUENTE VALIZAS"
        },
        {
            departamento: rocha,
            nombre: "OCEANIA DEL POLONIO"
        },
        {
            departamento: rocha,
            nombre: "PUEBLO NUEVO"
        },
        {
            departamento: rocha,
            nombre: "TAJAMARES DE LA PEDRERA"
        },
        {
            departamento: rocha,
            nombre: "SAN ANTONIO"
        },
        {
            departamento: salto,
            nombre: "SALTO"
        },
        {
            departamento: salto,
            nombre: "BELEN"
        },
        {
            departamento: salto,
            nombre: "CONSTITUCION"
        },
        {
            departamento: salto,
            nombre: "FERNANDEZ"
        },
        {
            departamento: salto,
            nombre: "SAN ANTONIO"
        },
        {
            departamento: salto,
            nombre: "CHACRAS DE BELEN"
        },
        {
            departamento: salto,
            nombre: "ALBISU"
        },
        {
            departamento: salto,
            nombre: "BIASSINI"
        },
        {
            departamento: salto,
            nombre: "CAMPO DE TODOS"
        },
        {
            departamento: salto,
            nombre: "CAYETANO"
        },
        {
            departamento: salto,
            nombre: "CUCHILLA DE GUAVIYU"
        },
        {
            departamento: salto,
            nombre: "TERMAS DEL DAYMAN"
        },
        {
            departamento: salto,
            nombre: "PALOMAS"
        },
        {
            departamento: salto,
            nombre: "PASO DEL PARQUE DEL DAYMAN"
        },
        {
            departamento: salto,
            nombre: "QUINTANA"
        },
        {
            departamento: salto,
            nombre: "SARANDI DE ARAPEY"
        },
        {
            departamento: salto,
            nombre: "SAUCEDO"
        },
        {
            departamento: salto,
            nombre: "ARENITAS BLANCAS"
        },
        {
            departamento: salto,
            nombre: "CELESTE"
        },
        {
            departamento: salto,
            nombre: "CERROS DE VERA"
        },
        {
            departamento: salto,
            nombre: "GARIBALDI"
        },
        {
            departamento: salto,
            nombre: "TERMAS DEL ARAPEY"
        },
        {
            departamento: salto,
            nombre: "LAS FLORES"
        },
        {
            departamento: salto,
            nombre: "LAURELES"
        },
        {
            departamento: salto,
            nombre: "LLUVERAS"
        },
        {
            departamento: salto,
            nombre: "MIGLIARO"
        },
        {
            departamento: salto,
            nombre: "OLIVERA"
        },
        {
            departamento: salto,
            nombre: "PASO DE LAS PIEDRAS DE ARERUNGUA"
        },
        {
            departamento: salto,
            nombre: "PUNTAS DE VALENTIN"
        },
        {
            departamento: salto,
            nombre: "RINCON DE VALENTIN"
        },
        {
            departamento: salto,
            nombre: "COLONIA 18 DE JULIO"
        },
        {
            departamento: salto,
            nombre: "PARQUE JOSE LUIS"
        },
        {
            departamento: salto,
            nombre: "COLONIA ITAPEBI"
        },
        {
            departamento: salto,
            nombre: "GUAVIYU DE ARAPEY"
        },
        {
            departamento: salto,
            nombre: "RUSSO"
        },
        {
            departamento: salto,
            nombre: "PASO CEMENTERIO"
        },
        {
            departamento: salto,
            nombre: "OSIMANI Y LLERENA"
        },
        {
            departamento: sanjose,
            nombre: "SAN JOSE DE MAYO"
        },
        {
            departamento: sanjose,
            nombre: "LIBERTAD"
        },
        {
            departamento: sanjose,
            nombre: "DELTA DEL TIGRE Y VILLAS"
        },
        {
            departamento: sanjose,
            nombre: "RODRIGUEZ"
        },
        {
            departamento: sanjose,
            nombre: "ITUZAINGO"
        },
        {
            departamento: sanjose,
            nombre: "SANTA MONICA"
        },
        {
            departamento: sanjose,
            nombre: "PUNTAS DE VALDEZ"
        },
        {
            departamento: sanjose,
            nombre: "GONZALEZ"
        },
        {
            departamento: sanjose,
            nombre: "MAL ABRIGO"
        },
        {
            departamento: sanjose,
            nombre: "PLAYA PASCUAL"
        },
        {
            departamento: sanjose,
            nombre: "18 DE JULIO (PUEBLO NUEVO)"
        },
        {
            departamento: sanjose,
            nombre: "RAFAEL PERAZA"
        },
        {
            departamento: sanjose,
            nombre: "RAIGON"
        },
        {
            departamento: sanjose,
            nombre: "SAFICI (PARQUE POSTEL)"
        },
        {
            departamento: sanjose,
            nombre: "JUAN SOLER"
        },
        {
            departamento: sanjose,
            nombre: "BOCA DEL CUFRE"
        },
        {
            departamento: sanjose,
            nombre: "CAPURRO"
        },
        {
            departamento: sanjose,
            nombre: "VILLA MARIA"
        },
        {
            departamento: sanjose,
            nombre: "ECILDA PAULLIER"
        },
        {
            departamento: sanjose,
            nombre: "KIYU-ORDEIG"
        },
        {
            departamento: sanjose,
            nombre: "LA BOYADA"
        },
        {
            departamento: sanjose,
            nombre: "CAÑADA GRANDE"
        },
        {
            departamento: sanjose,
            nombre: "RINCON DEL PINO"
        },
        {
            departamento: sanjose,
            nombre: "SAN GREGORIO"
        },
        {
            departamento: sanjose,
            nombre: "SCAVINO"
        },
        {
            departamento: sanjose,
            nombre: "MONTE GRANDE"
        },
        {
            departamento: sanjose,
            nombre: "CERAMICAS DEL SUR"
        },
        {
            departamento: sanjose,
            nombre: "RADIAL"
        },
        {
            departamento: sanjose,
            nombre: "COLOLO TINOSA"
        },
        {
            departamento: sanjose,
            nombre: "MANGRULLO"
        },
        {
            departamento: sanjose,
            nombre: "CARRETA QUEMADA"
        },
        {
            departamento: sanjose,
            nombre: "COSTAS DE PEREIRA"
        },
        {
            departamento: sanjose,
            nombre: "COLONIA DELTA"
        },
        {
            departamento: soriano,
            nombre: "MERCEDES"
        },
        {
            departamento: soriano,
            nombre: "DOLORES"
        },
        {
            departamento: soriano,
            nombre: "CARDONA"
        },
        {
            departamento: soriano,
            nombre: "JOSE ENRIQUE RODO"
        },
        {
            departamento: soriano,
            nombre: "PALMITAS"
        },
        {
            departamento: soriano,
            nombre: "VILLA SORIANO"
        },
        {
            departamento: soriano,
            nombre: "PALMAR"
        },
        {
            departamento: soriano,
            nombre: "EGAÑA"
        },
        {
            departamento: soriano,
            nombre: "SANTA CATALINA"
        },
        {
            departamento: soriano,
            nombre: "AGRACIADA"
        },
        {
            departamento: soriano,
            nombre: "CASTILLOS"
        },
        {
            departamento: soriano,
            nombre: "RISSO"
        },
        {
            departamento: soriano,
            nombre: "SACACHISPAS"
        },
        {
            departamento: soriano,
            nombre: "CAÑADA NIETO"
        },
        {
            departamento: soriano,
            nombre: "CUCHILLA DEL PERDIDO"
        },
        {
            departamento: soriano,
            nombre: "EL TALA"
        },
        {
            departamento: soriano,
            nombre: "LA CONCORDIA"
        },
        {
            departamento: soriano,
            nombre: "LA LOMA"
        },
        {
            departamento: soriano,
            nombre: "PALO SOLO"
        },
        {
            departamento: soriano,
            nombre: "CHACRAS DE DOLORES"
        },
        {
            departamento: soriano,
            nombre: "COLONIA CONCORDIA"
        },
        {
            departamento: soriano,
            nombre: "PERSEVERANO"
        },
        {
            departamento: soriano,
            nombre: "LARES"
        },
        {
            departamento: tacuarembo,
            nombre: "TACUAREMBO"
        },
        {
            departamento: tacuarembo,
            nombre: "PASO DE LOS TOROS"
        },
        {
            departamento: tacuarembo,
            nombre: "SAN GREGORIO DE POLANCO"
        },
        {
            departamento: tacuarembo,
            nombre: "TAMBORES"
        },
        {
            departamento: tacuarembo,
            nombre: "ACHAR"
        },
        {
            departamento: tacuarembo,
            nombre: "ANSINA"
        },
        {
            departamento: tacuarembo,
            nombre: "CURTINA"
        },
        {
            departamento: tacuarembo,
            nombre: "PASO DEL CERRO"
        },
        {
            departamento: tacuarembo,
            nombre: "CLARA"
        },
        {
            departamento: tacuarembo,
            nombre: "CUCHILLA DEL OMBU"
        },
        {
            departamento: tacuarembo,
            nombre: "LA HILERA"
        },
        {
            departamento: tacuarembo,
            nombre: "LAS TOSCAS"
        },
        {
            departamento: tacuarembo,
            nombre: "PASO BONILLA"
        },
        {
            departamento: tacuarembo,
            nombre: "PUEBLO DE ARRIBA"
        },
        {
            departamento: tacuarembo,
            nombre: "PUEBLO DEL BARRO"
        },
        {
            departamento: tacuarembo,
            nombre: "RINCON DEL BONETE"
        },
        {
            departamento: tacuarembo,
            nombre: "BALNEARIO IPORA"
        },
        {
            departamento: tacuarembo,
            nombre: "PIEDRA SOLA"
        },
        {
            departamento: tacuarembo,
            nombre: "CARDOZO"
        },
        {
            departamento: tacuarembo,
            nombre: "CHAMBERLAIN"
        },
        {
            departamento: tacuarembo,
            nombre: "CUCHILLA DE PERALTA"
        },
        {
            departamento: tacuarembo,
            nombre: "LA PEDRERA"
        },
        {
            departamento: tacuarembo,
            nombre: "LAURELES"
        },
        {
            departamento: tacuarembo,
            nombre: "MONTEVIDEO CHICO"
        },
        {
            departamento: tacuarembo,
            nombre: "CERRO DE PASTOREO"
        },
        {
            departamento: tacuarembo,
            nombre: "SAUCE DE BATOVI"
        },
        {
            departamento: tacuarembo,
            nombre: "PUNTAS DE CINCO SAUCES"
        },
        {
            departamento: tacuarembo,
            nombre: "RINCON DE PEREIRA"
        },
        {
            departamento: tacuarembo,
            nombre: "PUNTA DE CARRETERA"
        },
        {
            departamento: tacuarembo,
            nombre: "CRUZ DE LOS CAMINOS"
        },
        {
            departamento: treintaytres,
            nombre: "TREINTA Y TRES"
        },
        {
            departamento: treintaytres,
            nombre: "SANTA CLARA DE OLIMAR"
        },
        {
            departamento: treintaytres,
            nombre: "VERGARA"
        },
        {
            departamento: treintaytres,
            nombre: "ARROZAL TREINTA Y TRES"
        },
        {
            departamento: treintaytres,
            nombre: "GRAL. ENRIQUE MARTINEZ"
        },
        {
            departamento: treintaytres,
            nombre: "VILLA SARA"
        },
        {
            departamento: treintaytres,
            nombre: "CERRO CHATO"
        },
        {
            departamento: treintaytres,
            nombre: "ESTACION RINCON"
        },
        {
            departamento: treintaytres,
            nombre: "ISLA PATRULLA (MARIA ISABEL)"
        },
        {
            departamento: treintaytres,
            nombre: "VALENTINES"
        },
        {
            departamento: treintaytres,
            nombre: "POBLADO ALONZO"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA RINCON"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA LOS CEIBOS"
        },
        {
            departamento: treintaytres,
            nombre: "MARIA ALBINA"
        },
        {
            departamento: treintaytres,
            nombre: "MENDIZABAL (EL ORO)"
        },
        {
            departamento: treintaytres,
            nombre: "PUNTAS DEL PARAO"
        },
        {
            departamento: treintaytres,
            nombre: "VILLA PASSANO"
        },
        {
            departamento: treintaytres,
            nombre: "EJIDO DE TREINTA Y TRES"
        },
        {
            departamento: treintaytres,
            nombre: "EL BELLACO"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA LOS TEROS"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA BONOMO"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA EL TIGRE"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA LA CATUMBERA"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA LA QUERENCIA"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA LAS PALMAS"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA MINI"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA PROCIPA"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA SAN FERNANDO"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA SANTA FE"
        },
        {
            departamento: treintaytres,
            nombre: "ARROCERA ZAPATA"
        }
    ]
}