import { createConnection } from "typeorm";

/* ----- DataBase Connection ----- */

// createConnection method will automatically read connection options from the ormconfig file or environment variables
createConnection()
  .then((response) => {
    console.info("DB is connected...")
  })
  .catch((error) => console.log(error));