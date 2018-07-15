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
const validateParams = async (obj: any, param: string, filter: ParamValidator) => {
  const value = dot.get(obj, param);

  try {
    const result = await filter(value);

    if (result) {
      return true;
    }
  } catch (exception) {
    if (exception instanceof HttpError) {
      throw exception;
    }
    throw new HttpError(`Invalid field: ${param}`, HttpCode.Client.BAD_REQUEST, {
      param, value,
      exception: exception.message,
    });
  }

  throw new HttpError(`Invalid field: ${param}`, HttpCode.Client.BAD_REQUEST, {
    param, value,
  });
};

/**
 * Wraps a series of params into a single Express middleware.
 *
 * @param {String} param The param name to be fetch using `req.param(name)`
 * @param {ParamValidator} filter The filter instance to be wrapped
 */
export const wrapGroup = (params: { [label: string]: ParamValidator }) => async (req, res, next) => {
  const p = Object.keys(params);

  // Validate all params in series
  for (let i = 0; i < p.length; i += 1) {
    const param = p[i];
    await validateParams({ ...req.params, ...req.query, ...req.body }, param, params[p[i]]);
  }
  next();
};
