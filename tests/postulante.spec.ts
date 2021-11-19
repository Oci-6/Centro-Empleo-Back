import app from "../src/app";
import { connection } from "../src/databaseConnection";
import request from "supertest";
import { getConnection, getRepository } from "typeorm";
import { Postulante } from "../src/models/Postulante";
import { PostulanteTest } from "./helpers/postulante.test.helper";
import { connectionConfig } from "./helpers/connection";
import { EmpresaTest } from "./helpers/empresa.test.helper";
import { Empresa } from "../src/models/Empresa";
import { OfertaTest } from "./helpers/oferta.test.helper";
import { Oferta } from "../src/models/Oferta";

beforeAll(async () => {
    await connection.create(connectionConfig);

    let repositorio = getRepository(Postulante);
    await PostulanteTest.postulantesSeed(repositorio);
    PostulanteTest.tokenPostulante = (await request(app).post('/api/auth/login').send({ email: "mauri3418@gmail.com", contraseña: "12345" })).body.token;

    await EmpresaTest.empresasSeed(getRepository(Empresa));
    await OfertaTest.OfertaSeed(getRepository(Oferta));
})

afterAll(async () => {
    await connection.close();
})

describe('Postulante', () => {

    describe('POST /api/postulante/', () => {

        test('should respond with 200 status code and create "postulante" instance', async () => {

            const response = await request(app).post('/api/postulante/')
                .send(PostulanteTest.postulantePost);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(3);
            expect(response.body.email).toBe('mauricio@mail.com');
            expect(typeof response.body.contraseña).toBe('string');
        })

        test('should respond with error statuses code', async () => {

            for await (const post of PostulanteTest.postulanteValues) {
                const response = await request(app).post('/api/postulante')
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(post);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }


        })
    })

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
            expect(response.body.terminosCondiciones).toBe(true);
            expect(typeof response.body.tipoDocumento).toBe('string');

        })


    })

    describe('POST /api/postulante/foto', () => {
        test('should respond with a 200 status code', async () => {
            const response = await request(app).post('/api/postulante/foto')
            .attach('file', "placeholder.png")
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);

            expect(response.statusCode).toBe(200);

            

        })

        test('should respond with a 400 status code', async () => {
            const response = await request(app).post('/api/postulante/foto')
            .attach('file', "Placeholder-PDF.pdf")
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);

            expect(response.statusCode).toBe(400);

            

        })

    })

    describe('POST /api/postulante/curriculum', () => {
        test('should respond with a 200 status code', async () => {
            const response = await request(app).post('/api/postulante/curriculum')
            .attach('file', "Placeholder-PDF.pdf")
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);

            expect(response.statusCode).toBe(200);

            

        })

        test('should respond with a 400 status code', async () => {
            const response = await request(app).post('/api/postulante/curriculum')
            .attach('file', "placeholder.png")
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);

            expect(response.statusCode).toBe(400);

            

        })

    })

    describe('GET /api/postulante/getPDF/:id', () => {
        test('should respond with a 200 status code and content type PDF', async () => {
            const response = await request(app).get('/api/postulante/getPDF/1')
            .expect('Content-Type', /application\/pdf/)
            .expect('Content-Disposition', /attachment; filename=cv.pdf/);

            expect(response.statusCode).toBe(200);

            

        }, 15000)

        test('should respond with a 404 status code', async () => {
            const response = await request(app).get('/api/postulante/getPDF/10')
           
            expect(response.statusCode).toBe(404);

            

        }, 15000)
        
    })

    describe('GET /api/postulante/postularse', () => {
        test('should respond with a 200 status code', async () => {
            const response = await request(app).get('/api/postulante/postularse/1')
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);
 

            expect(response.statusCode).toBe(200);
            
            
            expect(response.body.postulantes.length).toBe(1);

            

        })

        test('should respond with a 404 status code', async () => {
            const response = await request(app).get('/api/postulante/postularse/1')
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);
 
            expect(response.statusCode).toBe(400);
        })

        test('should respond with a 404 status code', async () => {
            const response = await request(app).get('/api/postulante/postularse/1000')
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);
 
            expect(response.statusCode).toBe(400);
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

    describe('PUT /api/postulante/capacitacion/{idPostulante}', () => {

        test('should respond with 200 status code and update "capacitacion" instance', async () => {

            const response = await request(app).put('/api/postulante/capacitacion/')
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.capacitacionPut);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.nombre).toBe('Modificado');
            expect(response.body.areaTematica).toBe('Tecnologia');
            expect(response.body.institucion).toBe('Genexus Training');
            expect(new Date(response.body.fechaInicio)).toBeInstanceOf(Date);
            expect(response.body.duracion).toBe(5);
            expect(response.body.tipoDuracion).toBe("Semanas");
            expect(response.body.estado).toBe("Completo");
            
        })

        test('should respond with error status code', async () => {

            for await (const cap of PostulanteTest.capacitacionesPutValues) {
                const response = await request(app).put('/api/postulante/capacitacion/' + cap.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(cap.cap);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })

    })

    describe('DELETE /api/postulante/capacitacion/{idPostulante}', () => {

        test('should respond with 200 status code and delete a "capacitacion" instance', async () => {

            await request(app).delete('/api/postulante/capacitacion/1').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  
            const response = await request(app).get('/api/postulante/capacitaciones/1')
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante).send();

            expect(response.body.length).toBe(0);

        })

        test('should respond with 400 status code', async () => {

            const response = await request(app).delete('/api/postulante/capacitacion/300').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  

            expect(response.statusCode).toBe(404);

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

    describe('PUT /api/postulante/conocimientoInfo/{idPostulante}', () => {

        test('should respond with 200 status code and update "capacitacion" instance', async () => {

            const response = await request(app).put('/api/postulante/conocimientoInfo/')
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.conocimientoInfoPut);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.nombreApp).toBe('Modificado');
            expect(response.body.categoria).toBe('Ofimatica');
            expect(response.body.nivelConocimiento).toBe('Avanzado');
            
        })

        test('should respond with error status code', async () => {

            for await (const con of PostulanteTest.conocimientoInfoPutValues) {
                const response = await request(app).put('/api/postulante/conocimientoInfo/' + con.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(con.info);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })

    })

    describe('DELETE /api/postulante/conocimientoInfo/{idPostulante}', () => {

        test('should respond with 200 status code and delete a "conocimiento" instance', async () => {

            await request(app).delete('/api/postulante/conocimientoInfo/1').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  
            const response = await request(app).get('/api/postulante/conocimientoInfos/1')
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante).send();

            expect(response.body.length).toBe(0);

        })

        test('should respond with 400 status code', async () => {

            const response = await request(app).delete('/api/postulante/conocimientoInfo/300').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  

            expect(response.statusCode).toBe(404);

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

        test('should respond with error statuses code', async () => {
            for await (const idioma of PostulanteTest.idiomasValues) {
                const response = await request(app).post('/api/postulante/idioma/' + idioma.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(idioma.idioma);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })
    })

    describe('PUT /api/postulante/idioma/{idPostulante}', () => {

        test('should respond with 200 status code and update "idioma" instance', async () => {

            const response = await request(app).put('/api/postulante/idioma/')
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.idiomaPut);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.nombre).toBe('Modificado');
            expect(response.body.hablaConv).toBe('Basico');
            expect(response.body.compLec).toBe('Basico');
            expect(response.body.escritura).toBe('Basico');
            expect(response.body.compAud).toBe('Basico');
            
        })

        test('should respond with error status code', async () => {

            for await (const idi of PostulanteTest.idiomasPutValues) {
                const response = await request(app).put('/api/postulante/conocimientoInfo/' + idi.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(idi.idioma);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })

    })

    describe('DELETE /api/postulante/idioma/{idPostulante}', () => {

        test('should respond with 200 status code and delete a "conocimiento" instance', async () => {

            await request(app).delete('/api/postulante/idioma/1').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  
            const response = await request(app).get('/api/postulante/idiomas/1')
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante).send();

            expect(response.body.length).toBe(0);

        })

        test('should respond with 400 status code', async () => {

            const response = await request(app).delete('/api/postulante/idioma/300').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  

            expect(response.statusCode).toBe(404);

        })

    })

    describe('POST /api/postulante/expLaboral/{idPostulante}', () => {

        test('should respond with a 200 status code and create "expLaboral" instance', async () => {
            const response = await request(app).post('/api/postulante/expLaboral/' + PostulanteTest.postulante?.id)
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.expLaboralPost);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.nombreEmp).toBe('Altech');
            expect(response.body.cargo).toBe('Pasante');
            expect(response.body.area).toBe('Tecnologia');
            expect(response.body.nivelJer).toBe('Pasante');
            expect(response.body.tareas).toBe('Desarrollo, testing, documentacion');
            expect(new Date(response.body.fechaFin)).toBeInstanceOf(Date);
            expect(new Date(response.body.fechaInicio)).toBeInstanceOf(Date);
            expect(response.body.trabajando).toBe(false);
            expect(response.body.nombreRef).toBe('Mauricio');
            expect(response.body.apellidoRef).toBe('Ronqui');
            expect(response.body.cargoRef).toBe('CEO');
            expect(response.body.telefonoRef).toBe('099133535');
            expect(response.body.emailRef).toBe('mronqui@gmail.com');


        })

        test('should respond with error statuses code', async () => {
            for await (const exp of PostulanteTest.expLaboralValues) {
                const response = await request(app).post('/api/postulante/expLaboral/' + exp.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(exp.exp);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })
    })

    describe('PUT /api/postulante/expLaboral/{idPostulante}', () => {

        test('should respond with 200 status code and update "expLaboral" instance', async () => {

            const response = await request(app).put('/api/postulante/expLaboral/')
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.expLaboralPut);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.nombreEmp).toBe('Modificado');
            expect(response.body.cargo).toBe('Pasante');
            expect(response.body.area).toBe('Tecnologia');
            expect(response.body.nivelJer).toBe('Pasante');
            expect(response.body.tareas).toBe('Desarrollo, testing, documentacion');
            expect(new Date(response.body.fechaInicio)).toBeInstanceOf(Date);
            expect(new Date(response.body.fechaFin)).toBeInstanceOf(Date);
            expect(response.body.trabajando).toBe(false);
            expect(response.body.nombreRef).toBe('Mauricio');
            expect(response.body.apellidoRef).toBe('Ronqui');
            expect(response.body.cargoRef).toBe('CEO');
            expect(response.body.telefonoRef).toBe('099133535');
            expect(response.body.emailRef).toBe('mronqui@gmail.com');       
            
        })

        test('should respond with error status code', async () => {

            for await (const expL of PostulanteTest.expLaboralPutValues) {
                const response = await request(app).put('/api/postulante/expLaboral/' + expL.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(expL.exp);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })

    })

    describe('DELETE /api/postulante/expLaboral/{idPostulante}', () => {

        test('should respond with 200 status code and delete a "expLab" instance', async () => {

            await request(app).delete('/api/postulante/expLaboral/1').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  
            const response = await request(app).get('/api/postulante/expLaborales/1')
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante).send();

            expect(response.body.length).toBe(0);

        })

        test('should respond with 400 status code', async () => {

            const response = await request(app).delete('/api/postulante/expLaborales/300').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  

            expect(response.statusCode).toBe(404);

        })

    })

    describe('POST /api/postulante/permisosLicencia/{idPostulante}', () => {

        test('should respond with a 200 status code and create "permisosLicencia" instance', async () => {
            const response = await request(app).post('/api/postulante/permisosLicencia/' + PostulanteTest.postulante?.id)
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.permisosLicenciaPost);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.tipoDocumento).toBe('Carne');
            expect(new Date(response.body.vigencia)).toBeInstanceOf(Date);


        })

        test('should respond with error statuses code', async () => {
            for await (const permiso of PostulanteTest.permisosLicenciasValues) {
                const response = await request(app).post('/api/postulante/permisosLicencia/' + permiso.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(permiso.permiso);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })
    })

    describe('PUT /api/postulante/permisosLicencia/{idPostulante}', () => {

        test('should respond with 200 status code and update "permisosLicencia" instance', async () => {

            const response = await request(app).put('/api/postulante/permisosLicencia/')
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.permisosLicenciaPut);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.tipoDocumento).toBe('Modificado');
            expect(new Date(response.body.vigencia)).toBeInstanceOf(Date);     
            
        })

        test('should respond with error status code', async () => {

            for await (const permLic of PostulanteTest.permisosLicenciasPutValues) {
                const response = await request(app).put('/api/postulante/permisosLicencia/' + permLic.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(permLic.permiso);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })

    })

    describe('DELETE /api/postulante/permisosLicencia/{idPostulante}', () => {

        test('should respond with 200 status code and delete a "permLic" instance', async () => {

            await request(app).delete('/api/postulante/permisosLicencia/1').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  
            const response = await request(app).get('/api/postulante/permisosLicencias/1')
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante).send();

            expect(response.body.length).toBe(0);

        })

        test('should respond with 400 status code', async () => {

            const response = await request(app).delete('/api/postulante/permisosLicencia/300').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  

            expect(response.statusCode).toBe(404);

        })

    })

    describe('POST /api/postulante/preferenciaLaboral/{idPostulante}', () => {

        test('should respond with a 200 status code and create "preferenciaLaboral" instance', async () => {
            const response = await request(app).post('/api/postulante/preferenciaLaboral/' + PostulanteTest.postulante?.id)
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.preferenciaLaboralPost);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.puestoPreferido).toBe('Gerente');
            expect(response.body.areaInteres).toBe('Tecnologia');
            expect(response.body.aspiracionSalarial).toBe(30000);

        })

        test('should respond with error statuses code', async () => {
            for await (const pref of PostulanteTest.preferenciaLaboralValues) {
                const response = await request(app).post('/api/postulante/preferenciaLaboral/' + pref.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(pref.pref);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })
    })

    describe('PUT /api/postulante/preferenciaLaboral/{idPostulante}', () => {

        test('should respond with 200 status code and update "preferenciaLaboral" instance', async () => {

            const response = await request(app).put('/api/postulante/preferenciaLaboral/')
                .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                .send(PostulanteTest.preferenciaLaboralPut);

            expect(response.statusCode).toBe(200);

            expect(response.statusCode).toBeDefined();
            expect(response.body).toBeInstanceOf(Object);

            expect(response.body.id).toBe(1);
            expect(response.body.puestoPreferido).toBe('Modificado');
            expect(response.body.areaInteres).toBe('Tecnologia');
            expect(response.body.aspiracionSalarial).toBe(30000);   
            
        })

        test('should respond with error status code', async () => {

            for await (const prefLab of PostulanteTest.preferenciaLaboralPutValues) {
                const response = await request(app).put('/api/postulante/preferenciaLaboral/' + prefLab.postulante)
                    .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante)
                    .send(prefLab.pref);

                expect(response.statusCode === 400 || response.statusCode === 404).toBeTruthy();
            }

        })

    })

    describe('DELETE /api/postulante/preferenciaLaboral/{idPostulante}', () => {

        test('should respond with 200 status code and delete a "preferenciaLaboral" instance', async () => {

            await request(app).delete('/api/postulante/preferenciaLaboral/1').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  
            const response = await request(app).get('/api/postulante/preferenciaLaborales/1')
            .set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante).send();

            expect(response.body.length).toBe(0);

        })
        test('should respond with 400 status code', async () => {

            const response = await request(app).delete('/api/postulante/preferenciaLaboral/300').set('Authorization', 'Bearer ' + PostulanteTest.tokenPostulante);  

            expect(response.statusCode).toBe(404);

        })

    })
});
