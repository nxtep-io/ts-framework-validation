/**
 * The type definition for a param validator instance.
 */
export type ParamValidator = ((data: any) => Promise<boolean>);

/**
 * The type definition for a param validator map.
 */
export type ParamValidatorMap = {[key: string]: ParamValidator};
