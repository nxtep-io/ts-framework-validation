import * as request from 'supertest';
import Validate, { Params, ParamComposition } from '../lib';
import Server, { Controller, Post } from 'ts-framework';

describe('lib.composition', () => {

  let server;

  @Controller('/')
  class TestController {
    @Post('/test/composition', [
      Validate.compose({
        first: Params.isValidName,
        last: Params.isValidName,
      }),
    ])
    public static async group(req, res, next) {
      return res.success({ test: 'ok' });
    }

    @Post('/test/optional', [
      Validate.compose({
        'info.first': Params.isValidName,
        'info.last': Params.isValidName,
      }),
    ])
    public static async optional(req, res, next) {
      return res.success({ test: 'ok' });
    }
  }

  beforeEach(async () => {
    // Initialize a simple server
    server = new Server({
      port: 3333,
      cors: true,
      controllers: { TestController },
    });

    await server.listen();
  });

  afterEach(async () => {
    await server.stop();
    server = undefined;
  });

  it('should not accept an invalid composition body in the middleware', async () => {
    expect.assertions(5);

    // Perform a simple request to get a 400 response with invalid param
    const response = await request(server.app).post('/test/composition').send({})
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.status).toBe(400);
    expect(response.body.stackId).toBeDefined();
    expect(response.body.stack).toBeDefined();
    expect(response.body.message).toMatch(/invalid field/ig);
    expect(response.body.message).toMatch(/first/ig);
  });

  it('should accept a valid composition body in the middleware', async () => {
    const response = await request(server.app).post('/test/composition').send({
      first: 'blah',
      last: 'bleh',
    })
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('should accept an optional composition body in the middleware', async () => {
    const response = await request(server.app).post('/test/optional').send({
      info: {
        first: 'blah',
        last: 'bleh',
      },
    })
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
