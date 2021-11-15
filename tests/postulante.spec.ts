import app from "../src/app";
import { connection } from "../src/databaseConnection";
import request from "supertest";
import { getConnection, getRepository } from "typeorm";
import { Postulante } from "../src/models/Postulante";
import { PostulanteTest } from "./helpers/postulante.test.helper";
import { connectionConfig } from "./helpers/connection";

beforeAll(async () => {
    await connection.create(connectionConfig);

    let repositorio = getRepository(Postulante);
    await PostulanteTest.postulantesSeed(repositorio);
    PostulanteTest.tokenPostulante = (await request(app).post('/api/auth/login').send({ email: "mauri3418@gmail.com", contraseña: "12345" })).body.token;

})

afterAll(async () => {
    await connection.close();
})

describe('Postulante', () => {

    describe('PUT /api/postulante/', () => {
        test('should respond with a 200 status code', async () => {
            const response = await request(app).put('/api/postulante')
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.postulantePut);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);
            expect(typeof response.body.barrio).toBe('string');
            expect(typeof response.body.direccion).toBe('string');
            expect(typeof response.body.documento).toBe('string');
            expect(new Date(response.body.fechaNacimiento)).toBeInstanceOf(Date);
            expect(response.body.jCompleta).toBe(true);
            expect(response.body.jIndiferente).toBe(true);
            expect(typeof response.body.nivelEducativo).toBe('string');
            expect(typeof response.body.orientacionNE).toBe('string');
            expect(typeof response.body.primerApellido).toBe('string');
            expect(typeof response.body.primerTelefono).toBe('string');
            expect(response.body.recibirOfertas).toBe(true);
            expect(typeof response.body.segundoApellido).toBe('string');
            expect(typeof response.body.segundoNombre).toBe('string');
            expect(typeof response.body.sexo).toBe('string');
            expect(response.body.terminosCondiciones).toBe(false);
            expect(typeof response.body.tipoDocumento).toBe('string');

        })


    })

    describe('POST /api/postulante/capacitacion/{idPostulante}', () => {

        test('should respond with 200 status code and create "capacitacion" instance', async () => {

            const response = await request(app).post('/api/postulante/capacitacion/' + PostulanteTest.postulante?.id)
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.capacitacionPost);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.nombre).toBe('Genexus');
            expect(response.body.areaTematica).toBe('Tecnologia');
            expect(response.body.institucion).toBe('Genexus Training');
            expect(new Date(response.body.fechaInicio)).toBeInstanceOf(Date);
            expect(response.body.duracion).toBe(5);
            expect(response.body.tipoDuracion).toBe("Semanas");
            expect(response.body.estado).toBe("Completo");
        })

        test('should respond with error statuses code', async () => {

            for await (const cap of PostulanteTest.capacitacionesValues) {
                const response = await request(app).post('/api/postulante/capacitacion/' + cap.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(cap.cap);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }
            

        })
    })

    describe('POST /api/postulante/conocimientoInfo/{idPostulante}', () => {
        test('should respond with a 200 status code and create "conocimiento" instance', async () => {
            const response = await request(app).post('/api/postulante/conocimientoInfo/' + PostulanteTest.postulante?.id)
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.conocimientoInfoPost);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.nombreApp).toBe('Excel');
            expect(response.body.categoria).toBe('Ofimatica');
            expect(response.body.nivelConocimiento).toBe('Avanzado');

        })

        test('should respond with error statuses code', async () => {

            for await (const info of PostulanteTest.conocimientoInfoValues) {
                const response = await request(app).post('/api/postulante/conocimientoInfo/' + info.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(info.info);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }
            

        })

    })

    describe('POST /api/postulante/idioma/{idPostulante}', () => {

        test('should respond with a 200 status code and create "idioam" instance', async () => {
            const response = await request(app).post('/api/postulante/idioma/' + PostulanteTest.postulante?.id)
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.idiomaPost);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.nombre).toBe('Aleman');
            expect(response.body.hablaConv).toBe('Basico');
            expect(response.body.compLec).toBe('Basico');
            expect(response.body.escritura).toBe('Basico');
            expect(response.body.compAud).toBe('Basico');

        })

    })

});
