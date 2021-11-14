import cors from "cors";
import express from "express";
import morgan from "morgan";
import apiRoutes from "./routes/api.routes";


const app = express();

// Enable connection between diferent servers
app.use(cors());

// Request and Response Logger
app.use(morgan("dev"));

// Allows JSON interpretation.
app.use(express.json());

// Uploads
app.use('/uploads', express.static('uploads'))

app.use("/api", apiRoutes);




export default app;
