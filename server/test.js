const app = require('./app');
const request = require('supertest');
const mongoose = require('mongoose');


/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });


describe('GET /api/alojamientos', () => {
  it('should return all alojamientos', async () => {
    const res = await request(app).get('/api/alojamientos');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    //expect(res.type).toMatch(/json/);
    //expect(res.body).toHaveProperty('alojamientos'); pero debo encerrar en el modelo dicha propiedad en llaves ({alojamientos})
  });
});

describe("GET /api/alojamientos/:id", () => {
    it("should return a alojamiento", async () => {
      const res = await request(app).get(
        "/api/alojamientos/660533a1d675dae453151e08"
      );
      expect(res.statusCode).toBe(200);
      expect(res.body.nombre).toBe("Mini departamento");
    });
  });
  

describe('GET /api/usuarios', () => {
    it('should return all usuarios', async () => {
      const res = await request(app).get('/api/usuarios');
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /api/usuarios/:id", () => {
    it("should return a usuario", async () => {
      const res = await request(app).get(
        "/api/usuarios/66053479d675dae453151e0b"
      );
      expect(res.statusCode).toBe(200);
      expect(res.body.nombre).toBe("Erick");
    });
  });

/*
  describe("POST /api/usuarios", () => {
    it("should create a usuario", async () => {
      const res = await request(app).post("/api/usuarios").send({
        nombre: "Francisco",
        apellido: "Hidrobo",
        edad: "35",
        docIdentidad: 1045867982,
        correo: "f.hidrobo@yachaytech.edu.ec",
        celular: "0980610529",
        contrasena: "Hidrobo123"
      });
      expect(res.statusCode).toBe(201);
      expect(res.body.nombre).toBe("Francisco");
    });
  });
*/

  describe("PUT /api/usuarios/:id", () => {
    it("should update a usuario", async () => {
      const res = await request(app)
        .patch("/api/usuarios/662bd9a83d63df6c97545e8e")
        .send({
          contrasena: "Francisco123",
        });
      expect(res.statusCode).toBe(200);
      expect(res.body.contrasena).toBe("Francisco123");
    });
  });



  describe("DELETE /api/usuarios/:id", () => {
    it("should delete a usuario", async () => {
      const res = await request(app).delete(
        "/api/usuarios/662bd9a83d63df6c97545e8e"
      );
      expect(res.statusCode).toBe(200);
    });
  });



  describe('GET /api/propietarios', () => {
    it('should return all propietarios', async () => {
      const res = await request(app).get('/api/propietarios');
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  

afterEach(async () => {
    await mongoose.connection.close();
  });