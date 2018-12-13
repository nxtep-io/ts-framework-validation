/**
 * The type definition for a param validator instance.
 */
export declare type ParamValidator = ((data: any) => Promise<boolean>);
/**
 * Wraps a list of params into a single Express middleware and validate them synchronously.
 * Will throw in the first invalid value.
 *
 * @param {String} param The param name to be fetch using `req.param(name)`
 * @param {ParamValidator} filter The filter instance to be wrapped
 */
export declare const syncWrapGroup: (params: {
    [label: string]: (data: any) => Promise<boolean>;
}) => (req: any, res: any, next: any) => Promise<void>;
/**
 * Wraps a series of params into a single Express middleware and validate them asynchronously.
 * Will throw the full list of invalid values.
 *
 * @param {String} param The param name to be fetch using `req.param(name)`
 * @param {ParamValidator} filter The filter instance to be wrapped
 */
export declare const asyncWrapGroup: (params: {
    [label: string]: (data: any) => Promise<boolean>;
}) => (req: any, res: any, next: any) => Promise<void>;
export declare const wrapOrGroup: (params: {
    [label: string]: (data: any) => Promise<boolean>;
}, message: string) => (req: any, res: any, next: any) => Promise<void>;
