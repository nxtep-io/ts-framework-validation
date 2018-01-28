/**
 * The type definition for a param validator instance.
 */
export declare type ParamValidator = ((data: any) => Promise<Boolean>);
/**
 * The type definition for a param validator map.
 */
export declare type ParamValidatorMap = {
    [key: string]: ParamValidator;
};
