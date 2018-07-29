import * as dot from 'dot-prop';
import { HttpCode, HttpError, BaseRequest } from 'ts-framework';

/**
 * The type definition for a param validator instance.
 */
export type ParamValidator = ((data: any) => Promise<Boolean>);

/**
 * Run a single async param validation using dot notation.
 *
 * @param req The express request
 * @param param The param key
 * @param filter The param validator
 */
const validateParam = async (obj: any, param: string, filter: ParamValidator, throwOnInvalid: boolean) => {
  const value = dot.get(obj, param);

  const invalidMessage = `Invalid field: ${param}`;

  try {
    const result = await filter(value);

    if (result) { return true; }

    if (throwOnInvalid) { 
      throw new HttpError(invalidMessage, HttpCode.Client.BAD_REQUEST, { param, value });
    }

    return invalidMessage;
  } catch (exception) {
    if (exception instanceof HttpError) { throw exception; }

    if (throwOnInvalid) { 
      throw new HttpError(invalidMessage, HttpCode.Client.BAD_REQUEST, { 
        param, value, exception: exception.message,
      });
    }
    
    return `${invalidMessage} - Exception: ${exception.message}`;
  }
};

/**
 * Wraps a list of params into a single Express middleware and validate them synchronously.
 * Will throw in the first invalid value.
 *
 * @param {String} param The param name to be fetch using `req.param(name)`
 * @param {ParamValidator} filter The filter instance to be wrapped
 */
export const syncWrapGroup = (params: { [label: string]: ParamValidator }) => async (req, res, next) => {
  const p = Object.keys(params);

  // Validate all params in series
  for (let i = 0; i < p.length; i += 1) {
    const param = p[i];
    await validateParam({ ...req.params, ...req.query, ...req.body }, param, params[p[i]], true);
  }
  next();
};

/**
 * Wraps a series of params into a single Express middleware and validate them asynchronously.
 * Will throw the full list of invalid values.
 *
 * @param {String} param The param name to be fetch using `req.param(name)`
 * @param {ParamValidator} filter The filter instance to be wrapped
 */
export const asyncWrapGroup = (params: { [label: string]: ParamValidator }) => async (req, res, next) => {
  const p = Object.keys(params);
  const promises: Promise<string | true>[] = [];

  // Validate all params in parallel
  for (let i = 0; i < p.length; i += 1) {
    const param = p[i];
    promises.push(validateParam({ ...req.params, ...req.query, ...req.body }, param, params[p[i]], false));
  }

  const results = await Promise.all(promises);
  const errors = results.filter(result => result !== true);

  if (errors.length) {
    throw new HttpError(errors.join('; '), HttpCode.Client.BAD_REQUEST);
  }

  next();
};

export const wrapOrGroup = (params: { [label: string]: ParamValidator }, message: string) => async (req, res, next) => {
  const p = Object.keys(params);
  const promises: Promise<string | true>[] = [];

  // Validate all params in parallel
  for (let i = 0; i < p.length; i += 1) {
    const param = p[i];
    promises.push(validateParam({ ...req.params, ...req.query, ...req.body }, param, params[p[i]], false));
  }

  const results = await Promise.all(promises);
  const orResult = results.some(result => result === true);

  if (!orResult) {
    throw new HttpError(message, HttpCode.Client.BAD_REQUEST);
  }

  next();
};
