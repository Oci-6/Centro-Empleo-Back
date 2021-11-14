import { createConnection } from "typeorm";
import { data } from "./helpers/admin.helper";
import { get } from "./helpers/empresa.helper";
import { accesoConcedido } from "./libs/htmlMail";
import { startUp } from "./libs/startUp";

/* ----- DataBase Connection ----- */

// createConnection method will automatically read connection options from the ormconfig file or environment variables
createConnection()
  .then(async (response) => {
    startUp();
    console.info("DB is connected...")    
  })
  .catch((error) => console.log(error));

createConnection('appsocios')
  .then((response) => {
    console.info("AppSocios is connected...")
  })
  .catch((error) => console.log(error));