import * as Express from 'express';
import * as request from 'supertest';
import * as bodyParser from 'body-parser';
import Validate, { Params } from '../../lib';

describe('lib.middleware.Express', () => {

  let server;

  const sampleExceptionFilter = Validate.middleware('test', async (param) => {
    throw new Error('Test Exception');
  });

  beforeEach(async () => {
    // Initialize a simple server
    server = Express();
    server.use(bodyParser.json());
    server.use((req, res, next) => {
      req.param = (name, defaultValue) => {
        return req.params[name] || req.body[name] || req.query[name];
      };
      next();
    });
    server.use('/test/exception', sampleExceptionFilter);
    server.use('/test', Validate.middleware('name', Params.isValidName));
    server.get('*', (req, res) => res.json({ test: 'ok' }));
    server.use((exception, req, res, next) => {
      return res.status(400).json({
        exception: {
          message: exception.message,
          details: exception.details,
          stackId: exception.stackId,
        },
      });
    });
  });

  afterEach(async () => {
    server = undefined;
  });

  it('should accept a valid body in the middleware', async () => {

    // Perform a simple request to get a 200 response
    await request(server).get('/test').send({ name: 'Fausto Silva' })
      .expect('Content-Type', /json/)
      .expect(200, { test: 'ok' });
  });

  it('should not accept an invalid body in the middleware', async () => {
    expect.assertions(4);

    // Perform a simple request to get a 400 response with invalid param
    const response = await request(server).get('/test').send({})
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.exception).toBeDefined();
    expect(response.body.exception.stackId).toBeDefined();

    expect(response.body.exception.message).toMatch(/invalid field/ig);
    expect(response.body.exception.message).toMatch(/name/ig);
  });

  it('should not accept an exception in the filter', async () => {
    expect.assertions(4);

    // Perform a simple request to get a 400 response with invalid param
    const response = await request(server).get('/test/exception').send({})
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.exception).toBeDefined();
    expect(response.body.exception.stackId).toBeDefined();
    expect(response.body.exception.message).toMatch(/invalid field/ig);
    expect(response.body.exception.message).toMatch(/test/ig);
  });

});
