import Params from './params';
import { ParamValidator, ParamValidatorMap } from './ParamValidator';
import { default as ParamValidatorMiddleware } from './ParamValidatorMiddleware';
export { ParamValidator, ParamValidatorMiddleware, Params };
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
