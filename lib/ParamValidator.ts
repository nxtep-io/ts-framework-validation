/**
 * The type definition for a param validator instance.
 */
export type ParamValidator = ((data: any) => Promise<Boolean>);

/**
 * The type definition for a param validator map.
 */
export type ParamValidatorMap = {[key: string]: ParamValidator};
