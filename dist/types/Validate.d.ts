import { ParamValidator, ParamValidatorMap } from './ParamValidator';
export declare type ValidatorInputMap = {
    [key: string]: any;
};
export declare type ValidatorResultMap = {
    [key: string]: boolean;
};
export default class Validate {
    /**
     * Runs a single params validation.
     *
     * @param param The value to be validated
     * @param validator The ParamValidator instance
     */
    static param(param: any, validator: ParamValidator): Promise<boolean>;
    /**
     * Gets an Express middleware for a param validation.
     *
     * @param param The param name to be validated
     * @param validator The ParamValidator instance
     */
    static middleware(param: string, validator: ParamValidator): (req: any, res: any, next: any) => Promise<any>;
    /**
     * Gets a parallel composition builder for generating an Express middleware.
     * The middleware will run all validator in parallel and throw a list of invalid fields.
     */
    static parallelCompose(params: {
        [label: string]: ParamValidator;
    }): (req: any, res: any, next: any) => Promise<void>;
    /**
     * Gets a serial composition builder for generating an Express middleware.
     * The middleware will run all validator in series and throw the first invalid field.
     */
    static serialCompose(params: {
        [label: string]: ParamValidator;
    }): (req: any, res: any, next: any) => Promise<void>;
    /**
     * Gets an one of composition builder for generating an Express middleware.
     * The middleware will run all validator in parallel and throw the invalidMessage if all validations fail.
     */
    static oneOfCompose(params: {
        [label: string]: ParamValidator;
    }, invalidMessage: string): (req: any, res: any, next: any) => Promise<void>;
    /**
     * Runs a map of params validations.
     *
     * @param param The value to be validated
     * @param validator The ParamValidator instance
     */
    static map(params: ValidatorInputMap, validators: ParamValidatorMap): Promise<ValidatorResultMap>;
    /**
     * Runs and enforces all params validations.
     *
     * @param param The value to be validated
     * @param validator The ParamValidator instance
     */
    static all(params: ValidatorInputMap, validators: ParamValidatorMap): Promise<boolean>;
}
