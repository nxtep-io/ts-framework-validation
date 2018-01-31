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
    protected param: string;
    protected filter: ParamValidator;
    options: ParamValidatorMiddlewareOptions;
    constructor(param: string, filter: ParamValidator, options?: {});
    /**
     * Returns the Express midleware for a Para˜`m validator.
     *
     * @param req The express request
     * @param res The express response
     * @param next The express callback to the middleware chain
     */
    middleware(req: any, res: any, next: any): Promise<void>;
}
