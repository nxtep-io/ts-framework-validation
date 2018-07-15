/**
 * The type definition for a param validator instance.
 */
export declare type ParamValidator = ((data: any) => Promise<Boolean>);
/**
 * Wraps a series of params into a single Express middleware.
 *
 * @param {String} param The param name to be fetch using `req.param(name)`
 * @param {ParamValidator} filter The filter instance to be wrapped
 */
export declare const wrapGroup: (params: {
    [label: string]: (data: any) => Promise<Boolean>;
}) => (req: any, res: any, next: any) => Promise<void>;
