import app from "../src/app";
import { connection } from "../src/databaseConnection";
import request from "supertest";
import { getRepository } from "typeorm";
import { Novedad } from "../src/models/Novedad";
import { connectionConfig } from "./helpers/connection";
import { EmpresaTest } from "./helpers/empresa.test.helper";
import { Empresa } from "../src/models/Empresa";

beforeAll(async () => {
    await connection.create(connectionConfig);

    await EmpresaTest.empresasSeed(getRepository(Empresa));

    EmpresaTest.tokenEmpresa = (await request(app).post('/api/auth/login').send({ email: "empresa@mail.com", contraseña: "12345" })).body.token;
    EmpresaTest.tokenAdmin = (await request(app).post('/api/auth/login').send({ email: "admin@admin.com", contraseña: "12345" })).body.token;

})

afterAll(async () => {
    await connection.close();
})

describe('Empresa', () => {
    describe('PUT /api/empresa', () => {

        test('should respond with 200 status code', async () => {

            const response = await request(app).put('/api/empresa')
                .set('Authorization', 'Bearer ' + EmpresaTest.tokenEmpresa)
                .send(EmpresaTest.empresaPut);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);
            expect(typeof response.body.razonSocial).toBe('string');
            expect(typeof response.body.nombreFantasia).toBe('string');
            expect(typeof response.body.visibilidad).toBe('boolean');
            expect(typeof response.body.telefono).toBe('string');

        })

        test('should respond with error statuses code', async () => {

            for await (const emp of EmpresaTest.empresaPutValues) {
                const response = await request(app).put('/api/empresa')
                    .set('Authorization', 'Bearer ' + EmpresaTest.tokenEmpresa)
                    .send(emp);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })
    })

    describe('POST /api/empresa/send-email', () => {
        test('should respond with 200 status code', async () => {

            const response = await request(app).post('/api/empresa/send-email')
                .set('Authorization', 'Bearer ' + EmpresaTest.tokenEmpresa)
                .send();

            expect(response.statusCode).toBe(200);


        })
    })

    describe('PUT /api/admin/habilitar', () => {
        test('should respond with 200 status code', async () => {

            const response = await request(app).put('/api/admin/habilitar')
                .set('Authorization', 'Bearer ' + EmpresaTest.tokenAdmin)
                .send(EmpresaTest.habilitarEmpresa);

            expect(response.statusCode).toBe(200);
            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);
            expect(response.body.id).toBe(1);
            expect(typeof response.body.fechaExpiracion).toBe('string');

        })

        test('should respond with error statuses code', async () => {
            for await (const hab of EmpresaTest.habilitarEmpresaValues) {
                const response = await request(app).put('/api/admin/habilitar')
                .set('Authorization', 'Bearer ' + EmpresaTest.tokenAdmin)
                .send(hab);


                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })
    })

    describe('POST /api/ofertas', () => {
        test('should respond with 200 status code', async () => {

            const response = await request(app).post('/api/ofertas/')
                .set('Authorization', 'Bearer ' + EmpresaTest.tokenEmpresa)
                .send(EmpresaTest.ofertaPost);

            expect(response.statusCode).toBe(200);
            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);
            expect(response.body.id).toBe(1);
            expect(response.body.vacante).toBe("Panadero");
            expect(response.body.areaTrabajo).toBe("Gastronomia");
            expect(response.body.requisitosExcluyentes).toBe("Saber hacer pan");
            expect(response.body.funcionesTareas).toBe("Hacer pan");
            expect(response.body.requisitosValorar).toBe("Que le quede rico el pan");
            expect(response.body.horario).toBe("L a D de 8 a 23");
            expect(response.body.salarioDesde).toBe(200);
            expect(response.body.salarioHasta).toBe(500);
            expect(response.body.lugar).toBe("Panaderia");
            expect(typeof response.body.fechaCierre).toBe("string");

        })
    })
})

