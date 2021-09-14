import { createConnection } from "typeorm";
import { paisesStartUp } from "./libs/paisesStartUp";

/* ----- DataBase Connection ----- */

// createConnection method will automatically read connection options from the ormconfig file or environment variables
createConnection()
  .then((response) => {
    paisesStartUp();
    console.info("DB is connected...")
  })
  .catch((error) => console.log(error));