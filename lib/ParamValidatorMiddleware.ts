import { HttpError, HttpCode } from 'ts-framework';
import { ParamValidator } from './ParamValidator';

export interface ParamValidatorMiddlewareOptions {
  message?: (param: string) => string;
}

/**
 * Wraps a simple param validator into an Express middleware.
 * 
 * @param {String} param The param name to be fetch using `req.param(name)`
 * @param {ParamValidator} filter The filter instance to be wrapped
 */
export default class ParamValidatorMiddleware {
  options: ParamValidatorMiddlewareOptions;

  constructor(protected param: string, protected filter: ParamValidator, options = {}) {
    this.options = { message: (param: string) => `Invalid field: ${param}`, ...options };
  }

  /**
   * Returns the Express midleware for a Para˜`m validator.
   * 
   * @param req The express request
   * @param res The express response
   * @param next The express callback to the middleware chain
   */
  async middleware(req, res, next) {
    try {
      if (!await this.filter(req.param(this.param))) {
        res.error(new HttpError(this.options.message(this.param), HttpCode.Client.BAD_REQUEST));
      } else {
        next();
      }
    } catch (exception) {
      res.error(HttpCode.Client.BAD_REQUEST, exception);
    }
  }

}
