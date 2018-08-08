import * as request from 'supertest';
import Validate, { Params } from '../lib';
import Server, { Controller, Post } from 'ts-framework';

describe('lib.middleware', () => {
  let server;

  const sampleExceptionFilter = Validate.middleware('test', async (param) => {
    throw new Error('Test Exception');
  });

  @Controller('/')
  class TestController {
    @Post('/test', [Validate.middleware('name', Params.isValidName)])
    public static async test(req, res, next) {
      return res.success({ test: 'ok' });
    }

    @Post('/exception', [sampleExceptionFilter])
    public static async test(req, res, next) {
      return res.success({ test: 'ok' });
    }
  }

  beforeEach(async () => {
    // Initialize a simple server
    server = new Server({
      port: 3333,
      security: {
        cors: true,
      },
      router: {
        controllers: { TestController },
      },
    });

    await server.listen();
  });

  afterEach(async () => {
    await server.close();
    server = undefined;
  });

  it('should accept a valid body in the middleware', async () => {

    // Perform a simple request to get a 200 response
    await request(server.app).post('/test').send({ name: 'Fausto Silva' })
      .expect('Content-Type', /json/)
      .expect(200, { test: 'ok' });
  });

  it('should not accept an invalid body in the middleware', async () => {
    expect.assertions(5);

    // Perform a simple request to get a 400 response with invalid param
    const response = await request(server.app).post('/test').send({})
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.status).toBe(400);
    expect(response.body.stackId).toBeDefined();
    expect(response.body.stack).toBeDefined();
    expect(response.body.message).toMatch(/invalid field/ig);
    expect(response.body.message).toMatch(/name/ig);
  });

  it('should not accept an exception in the middleware', async () => {
    expect.assertions(5);

    // Perform a simple request to get a 400 response with invalid param
    const response = await request(server.app).post('/exception').send({})
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.status).toBe(400);
    expect(response.body.stackId).toBeDefined();
    expect(response.body.stack).toBeDefined();
    expect(response.body.message).toMatch(/invalid field/ig);
    expect(response.body.message).toMatch(/test/ig);
  });

});
