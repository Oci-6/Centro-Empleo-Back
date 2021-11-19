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

        test('should respond with a error status code', async () => {
            const response = await request(app).post('/api/novedad/')
            .field("titulo", "ASD")
            .field("contenido", true)
            .attach('file', "Placeholder-PDF.pdf")
            .set('Authorization', 'Bearer ' + NovedadTest.tokenAdmin);

            expect(response.statusCode).toBe(400);
        })

        test('should respond with a error status code', async () => {
            const response = await request(app).post('/api/novedad/')
            .field("titulo", "ASD")
            .field("contenido", "")
            .attach('file', "placeholder.png")
            .set('Authorization', 'Bearer ' + NovedadTest.tokenAdmin);

            expect(response.statusCode).toBe(400);
        })

        test('should respond with a error status code', async () => {
            const response = await request(app).post('/api/novedad/')
            .set('Authorization', 'Bearer ' + NovedadTest.tokenAdmin).send({titulo: "sadsafa", contenido: true});            
            expect(response.statusCode).toBe(400);
        })


    })

    describe('PUT /api/novedad/', () => {
        test('should respond with a 200 status code', async () => {
            const response = await request(app).put('/api/novedad/')
            .field("id","1")
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

        //PUT sin Id
        test('should respond with a error status code', async () => {
            const response = await request(app).put('/api/novedad/')
            .field("titulo", "Novedad 3")
            .field("contenido", "Contenido")
            .attach('file', "placeholder.png")
            .set('Authorization', 'Bearer ' + NovedadTest.tokenAdmin);
            
            expect(response.statusCode).toBe(400);
        })


        test('should respond with a error status code', async () => {
            const response = await request(app).put('/api/novedad/')
            .field("id","1")
            .field("titulo", "Novedad 3")
            .field("contenido", "Contenido")
            .attach('file', "Placeholder-PDF.pdf")
            .set('Authorization', 'Bearer ' + NovedadTest.tokenAdmin);
            
            expect(response.statusCode).toBe(400);
        })

        test('should respond with a error status code', async () => {
            const response = await request(app).put('/api/novedad/')
            .field("id","1")
            .field("titulo", "ASD")
            .field("contenido", "")
            .attach('file', "placeholder.png")
            .set('Authorization', 'Bearer ' + NovedadTest.tokenAdmin);
            
            expect(response.statusCode).toBe(400);
        })

    })

    describe('DELETE /api/novedad/', () => {
        test('should respond with a 200 status code', async () => {
            await request(app).delete('/api/novedad/1')
            .set('Authorization', 'Bearer ' + NovedadTest.tokenAdmin).expect(200);

            const response = await request(app).get('/api/novedad/buscar').send();

            expect(response.body.total).toBe(2);
            
        })

        test('should respond with a 400 status code', async () => {
            await request(app).delete('/api/novedad/500')
            .set('Authorization', 'Bearer ' + NovedadTest.tokenAdmin).expect(400);

            const response = await request(app).get('/api/novedad/buscar').send();

            expect(response.body.total).toBe(2);
            
        })
        
    })
    
});
