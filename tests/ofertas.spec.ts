import app from "../src/app";
import {connection} from "../src/databaseConnection";

import request from "supertest";
import { connectionConfig } from "./helpers/connection";

beforeAll(async ()=> {
    await connection.create(connectionConfig);

})

afterAll(async () => {
    await connection.close();

})

describe('GET /api/oferta', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/api/ofertas/buscar').send();

        expect(response.statusCode).toBe(200);
    })

    test('should response with an array', async () => {
        const response = await request(app).get('/api/ofertas/buscar').send();

        expect(response.body.ofertas).toBeInstanceOf(Array);
        expect(typeof response.body.total).toBe('number');
    })
})
