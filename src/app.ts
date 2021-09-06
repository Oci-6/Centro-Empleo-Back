import cors from "cors";
import express from "express";
import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { User } from "./models/User";

// create typeorm connection
createConnection().then(connection => {
    const userRepository = connection.getRepository(User);

    // create and setup express app
    const app = express();
    const nodemailer = require("nodemailer");

    app.use(express.json());

    app.use(cors());

    app.use('/uploads', express.static('uploads'))

    // register routes

    app.use(require('./routes/uploads.routes'));

    app.post("/api/send-email", function (req: Request, res: Response) {
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "mauri3418@gmail.com",
                pass: "weqmlnjpcakcomld"
            }
        });

        var mailOptions = {
            from: "Centro empleo <mauri3418@gmail.com>",
            to: "agustin.peraza@estudiantes.utec.edu.uy,mauricio.camacho@estudiantes.utec.edu.uy",
            subject: "Enviado desde nodemailer",
            text: "PT"
        }

        transporter.verify().then(() => {
            console.log('Ready for send emails');
        })

        transporter.sendMail(mailOptions, (error: any, info: any) => {
            if (error) {
                res.status(500).send(error.message);
            } else {
                console.log("Email enviado");
                res.status(200).jsonp(req.body);

            }
        })
    });

    app.get("/users", async function (req: Request, res: Response) {
        const users = await userRepository.find();
        res.json(users);
    });

    app.get("/users/:id", async function (req: Request, res: Response) {
        const results = await userRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.post("/users", async function (req: Request, res: Response) {
        const user = await userRepository.create(req.body);
        const results = await userRepository.save(user);
        return res.send(results);
    });

    app.post("/api/auth/signingoogle", async function (req: Request, res: Response) {
        const usuario = await userRepository.findOne(req.params.id);
        if (usuario) return res.send(usuario);


        const user = await userRepository.create(req.body);
        const results = await userRepository.save(user);
        return res.send(results);
    });

    app.put("/users/:id", async function (req: Request, res: Response) {
        const user = await userRepository.findOne(req.params.id);
        if (!user) return JSON.parse("{message: 'error'}")
        userRepository.merge(user, req.body);
        const results = await userRepository.save(user);
        return res.send(results);
    });

    app.delete("/users/:id", async function (req: Request, res: Response) {
        const results = await userRepository.delete(req.params.id);
        return res.send(results);
    });

    // start express server
    app.listen(3000);
});