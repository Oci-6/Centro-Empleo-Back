import app from "../src/app";
import { connection } from "../src/databaseConnection";
import request from "supertest";
import { getRepository } from "typeorm";
import { NovedadTest } from "./helpers/novedad.test.helper";
import { Novedad } from "../src/models/Novedad";
import { connectionConfig } from "./helpers/connection";

beforeAll(async () => {
    await connection.create(connectionConfig);

    NovedadTest.tokenAdmin = (await request(app).post('/api/auth/login').send({ email: "admin@admin.com", contraseña: "12345" })).body.token;

    await NovedadTest.novedadSeed(getRepository(Novedad));

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

describe('Novedad', () => {
    describe('GET /api/novedad/', () => {
        test('should respond with a 200 status code', async () => {
            const response = await request(app).get('/api/novedad/buscar').send();

            expect(response.statusCode).toBe(200);

            expect(response.body).toBeInstanceOf(Object);
            expect(response.body).toBeDefined();

            expect(response.body.novedades).toBeInstanceOf(Array);
            expect(typeof response.body.total).toBe('number');


        })


    })

    describe('POST /api/novedad/', () => {
        test('should respond with a 200 status code', async () => {
            const response = await request(app).post('/api/novedad/')
            .field("titulo", "Novedad 3")
            .field("contenido", "Contenido")
            .attach('file', "placeholder.png")
            .set('Authorization', 'Bearer ' + NovedadTest.tokenAdmin);

            expect(response.statusCode).toBe(200);
            expect(response.body).toBeDefined();
            expect(typeof response.body.id).toBe('number');
            expect(typeof response.body.titulo).toBe('string');
            expect(typeof response.body.contenido).toBe('string');
            expect(new Date(response.body.fechaPublicacion)).toBeInstanceOf(Date);
            expect(typeof response.body.titulo).toBe('string');

        })

        test.skip('should respond with a error status code', async () => {
            const response = await request(app).post('/api/novedad/')
            .field("titulo", "ASD")
            .field("contenido", true)
            .attach('file', "Placeholder-PDF.pdf")
            .set('Authorization', 'Bearer ' + NovedadTest.tokenAdmin);

            expect(response.statusCode).toBe(400);
        })


    })
});
