import * as request from 'supertest';
import Validate, { Params, ParamComposition } from '../lib';
import Server, { Controller, Post } from 'ts-framework';

describe('lib.composition', () => {

  let server;

  const causeException = async (data: any): Promise<boolean> => {
    throw new Error('Our custom exception');
    return true;
  };

  @Controller('/')
  class TestController {
    @Post('/test/dot-notation', [
      Validate.serialCompose({
        'info.first': Params.isValidName,
        'info.last': Params.isValidName,
      }),
    ])
    public static async dotNotation(req, res, next) {
      return res.success({ test: 'ok' });
    }

    @Post('/test/serial-exception', [
      Validate.serialCompose({
        first: causeException,
      }),
    ])
    public static async serialException(req, res, next) {
      return res.success({ test: 'ok' });
    }

    @Post('/test/parallel-exception', [
      Validate.parallelCompose({
        first: causeException,
      }),
    ])
    public static async parallelException(req, res, next) {
      return res.success({ test: 'ok' });
    }

    @Post('/test/serial', [
      Validate.serialCompose({
        first: Params.isValidName,
        last: Params.isValidName,
      }),
    ])
    public static async serial(req, res, next) {
      return res.success({ test: 'ok' });
    }

    @Post('/test/parallel', [
      Validate.parallelCompose({
        first: Params.isValidName,
        last: Params.isValidName,
      }),
    ])
    public static async parallel(req, res, next) {
      return res.success({ test: 'ok' });
    }

    @Post('/test/one-of', [
      Validate.oneOfCompose({
        first: Params.isValidName,
        last: Params.isValidName,
      }, 'Invalid message'),
    ])
    public static async oneOf(req, res, next) {
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

  it('should accept an dot notation composition body in the middleware', async () => {
    const response = await request(server.app).post('/test/dot-notation').send({
      info: {
        first: 'blah',
        last: 'bleh',
      },
    })
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('should treat exceptions as if the validation returned false when using serial', async () => {
    expect.assertions(7);

    const response = await request(server.app).post('/test/serial-exception').send({
      info: {
        first: 'blah',
        last: 'bleh',
      },
    })
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.status).toBe(400);
    expect(response.body.stackId).toBeDefined();
    expect(response.body.stack).toBeDefined();
    // Should return a error for the first field with the error message
    expect(response.body.message).toMatch(/invalid field/ig);
    expect(response.body.message).toMatch(/first/ig);
    expect(response.body.details.exception).toMatch(/exception/ig);
    expect(response.body.details.exception).toMatch(/our custom exception/ig);
  });

  it('should treat exceptions as if the validation returned false when using parallel', async () => {
    expect.assertions(7);

    const response = await request(server.app).post('/test/parallel-exception').send({
      info: {
        first: 'blah',
        last: 'bleh',
      },
    })
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.status).toBe(400);
    expect(response.body.stackId).toBeDefined();
    expect(response.body.stack).toBeDefined();
    // Should return a error for the first field
    expect(response.body.message).toMatch(/invalid field/ig);
    expect(response.body.message).toMatch(/first/ig);
    expect(response.body.message).toMatch(/exception/ig);
    expect(response.body.message).toMatch(/our custom exception/ig);
  });

  it('should not accept an invalid body in the middleware when using serial', async () => {
    expect.assertions(5);

    // Perform a simple request to get a 400 response with invalid param
    const response = await request(server.app).post('/test/serial').send({})
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.status).toBe(400);
    expect(response.body.stackId).toBeDefined();
    expect(response.body.stack).toBeDefined();
    // Should return a error for the first field
    expect(response.body.message).toMatch(/invalid field/ig);
    expect(response.body.message).toMatch(/first/ig);
  });

  it('should accept a valid body in the middleware when using serial', async () => {
    const response = await request(server.app).post('/test/serial').send({
      first: 'blah',
      last: 'bleh',
    })
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('should not accept an invalid body in the middleware when using parallel', async () => {
    expect.assertions(7);

    // Perform a simple request to get a 400 response with invalid param
    const response = await request(server.app).post('/test/parallel').send({})
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.status).toBe(400);
    expect(response.body.stackId).toBeDefined();
    expect(response.body.stack).toBeDefined();
    // Should return a error for each field
    expect(response.body.message).toMatch(/invalid field/ig);
    expect(response.body.message).toMatch(/first/ig);
    expect(response.body.message).toMatch(/invalid field/ig);
    expect(response.body.message).toMatch(/last/ig);
  });

  it('should accept a valid body in the middleware when using parallel', async () => {
    const response = await request(server.app).post('/test/parallel').send({
      first: 'blah',
      last: 'bleh',
    })
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('should not accept an invalid body in the middleware when using one of', async () => {
    expect.assertions(4);

    // Perform a simple request to get a 400 response with invalid param
    const response = await request(server.app).post('/test/one-of').send({})
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.status).toBe(400);
    expect(response.body.stackId).toBeDefined();
    expect(response.body.stack).toBeDefined();
    // Should return our custom error meesage
    expect(response.body.message).toMatch(/invalid message/ig);
  });

  it('should accept a valid body in the middleware when using parallel', async () => {
    const response = await request(server.app).post('/test/one-of').send({
      first: 'blah',
    })
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
