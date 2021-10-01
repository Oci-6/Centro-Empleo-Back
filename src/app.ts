import cors from "cors";
import express from "express";
import morgan from "morgan";
import apiRoutes from "./routes/api.routes";


const app = express();

/* ----- DataBase Connection ----- */

import './databaseConnection';

/* ----- Middlewares ----- */

import { esPublico } from "./middlewares/esPublico";
import { verifyToken } from "./middlewares/verifyToken";
import { esEmpresa } from "./middlewares/esEmpresa";

// Enable connection between diferent servers
app.use(cors());

// Request and Response Logger
app.use(morgan("dev"));

// Allows JSON interpretation.
app.use(express.json());

// Uploads
app.use('/uploads', [verifyToken] , express.static('uploads'))

app.use("/api", apiRoutes);




export default app;
