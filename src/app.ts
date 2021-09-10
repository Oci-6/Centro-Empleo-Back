import cors from "cors";
import express from "express";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "./models/User";
import morgan from "morgan";
import { createConnection } from "typeorm";
import apiRoutes from "./routes/api.routes";

const nodemailer = require("nodemailer");

const app = express();

/* ----- DataBase Connection ----- */

import './databaseConnection';

/* ----- Middlewares ----- */

// Enable connection between diferent servers
app.use(cors());

// Request and Response Logger
app.use(morgan("dev"));

// Allows JSON interpretation.
app.use(express.json());

// Uploads
app.use('/uploads', express.static('uploads'))

app.use("/api", apiRoutes);

// app.post("/api/send-email", function (req: Request, res: Response) {
//     var transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         auth: {
//             user: "mauri3418@gmail.com",
//             pass: "weqmlnjpcakcomld"
//         }
//     });

//     var mailOptions = {
//         from: "Centro empleo <mauri3418@gmail.com>",
//         to: "agustin.peraza@estudiantes.utec.edu.uy,mauricio.camacho@estudiantes.utec.edu.uy",
//         subject: "Enviado desde nodemailer",
//         text: "PT"
//     }

//     transporter.verify().then(() => {
//         console.log('Ready for send emails');
//     })

//     transporter.sendMail(mailOptions, (error: any, info: any) => {
//         if (error) {
//             res.status(500).send(error.message);
//         } else {
//             console.log("Email enviado");
//             res.status(200).jsonp(req.body);

//         }
//     })
// });

// app.get("/users", async function (req: Request, res: Response) {
//     const users = await userRepository.find();
//     res.json(users);
// });

// app.get("/users/:id", async function (req: Request, res: Response) {
//     const results = await userRepository.findOne(req.params.id);
//     return res.send(results);
// });

// app.post("/users", async function (req: Request, res: Response) {
//     const user = await userRepository.create(req.body);
//     const results = await userRepository.save(user);
//     return res.send(results);
// });

// app.post("/api/auth/signingoogle", async function (req: Request, res: Response) {
//     const usuario = await userRepository.findOne(req.params.id);
//     if (usuario) return res.send(usuario);


//     const user = await userRepository.create(req.body);
//     const results = await userRepository.save(user);
//     return res.send(results);
// });

// app.put("/users/:id", async function (req: Request, res: Response) {
//     const user = await userRepository.findOne(req.params.id);
//     if (!user) return JSON.parse("{message: 'error'}")
//     userRepository.merge(user, req.body);
//     const results = await userRepository.save(user);
//     return res.send(results);
// });

// app.delete("/users/:id", async function (req: Request, res: Response) {
//     const results = await userRepository.delete(req.params.id);
//     return res.send(results);
// });

export default app;
