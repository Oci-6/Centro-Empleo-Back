import app from "./app";
import { connection } from "./databaseConnection";

/* ----- DataBase Connection ----- */

connection.create();

/* ----- Server ----- */

// Starts the server on the specified port.
app.listen(3000, () => {
    console.log("Server on port", 3000);
});