import Params from './params';
import * as ParamComposition from './ParamComposition';
import { ParamValidator, ParamValidatorMap } from './ParamValidator';
import { default as ParamValidatorMiddleware } from './ParamValidatorMiddleware';
export { ParamValidator, ParamValidatorMiddleware, ParamComposition, Params };
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
    static param(param: any, validator: ParamValidator): Promise<Boolean>;
    /**
     * Gets an Express middleware for a param validation.
     *
     * @param param The param name to be validated
     * @param validator The ParamValidator instance
     */
    static middleware(param: string, validator: ParamValidator): (req: any, res: any, next: any) => Promise<void>;
    /**
     * Gets an composition builder for generating an Express middleware.
     */
    static compose(params: {
        [label: string]: ParamValidator;
    }): (req: any, res: any, next: any) => Promise<void>;
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
