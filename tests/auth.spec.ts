import app from "../src/app";
import { connection } from "../src/databaseConnection";
import request from "supertest";
import { getConnection, getRepository } from "typeorm";
import { Postulante } from "../src/models/Postulante";
import { connectionConfig } from "./helpers/connection";

beforeAll(async () => {
   
    await connection.create(connectionConfig);

})

afterAll(async () => {
    await connection.close();

})

const loginValues = [
    {},
    { email: "" },
    { contraseña: "" },
    { email: "admin@admin.com" },
    { email: 12345, contraseña: true },
    { email: "admin@yi.com", contraseña: "12345" },
    { email: "admin@admin.com", contraseña: "12355" },
]

describe('Auth', () => {

    describe('POST /api/auth/login', () => {
        test('should respond with a 200 status code', async () => {
            const response = await request(app).post('/api/auth/login').send({ email: "admin@admin.com", contraseña: "12345" });

            expect(response.statusCode).toBe(200);

            expect(response.body).toBeInstanceOf(Object);
            expect(response.body).toBeDefined();

            expect(response.body.usuario).toBeInstanceOf(Object);
            expect(typeof response.body.token).toBe('string');
            expect(response.body.tipo).toBe('Admin');


        })

        test('should respond with a 404 and 400 statutes code', async () => {

            for await (const login of loginValues) {

                const response = await request(app).post('/api/auth/login').send(login);

                expect(response.statusCode === 404 || response.statusCode === 400).toBeTruthy();


            }
        })

    })
});
