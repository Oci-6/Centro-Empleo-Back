import { createConnection } from "typeorm";
import { startUp } from "./libs/startUp";

/* ----- DataBase Connection ----- */

// createConnection method will automatically read connection options from the ormconfig file or environment variables
createConnection()
  .then((response) => {
    startUp();
    console.info("DB is connected...")
  })
  .catch((error) => console.log(error));

createConnection('appsocios')
  .then((response) => {
    console.info("AppSocios is connected...")
  })
  .catch((error) => console.log(error));