/**
 * The type definition for a param validator instance.
 */
export declare type ParamValidator = ((data: any) => Promise<boolean>);
/**
 * The type definition for a param validator map.
 */
export declare type ParamValidatorMap = {
    [key: string]: ParamValidator;
};
