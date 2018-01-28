import { HttpError, HttpCode } from 'ts-framework';
import Params from './params';
import { ParamValidator, ParamValidatorMap } from './ParamValidator';
import { default as ParamValidatorMiddleware } from './ParamValidatorMiddleware';

export { ParamValidator, ParamValidatorMiddleware, Params };

export type ValidatorInputMap = { [key: string]: any };
export type ValidatorResultMap = { [key: string]: boolean };

export default class Validate {

  /**
   * Runs a single params validation.
   * 
   * @param param The value to be validated
   * @param validator The ParamValidator instance
   */
  public static async param(param: any, validator: ParamValidator) {
    return await validator(param);
  }

  /**
   * Runs a map of params validations.
   * 
   * @param param The value to be validated
   * @param validator The ParamValidator instance
   */
  public static async map(params: ValidatorInputMap, validators: ParamValidatorMap): Promise<ValidatorResultMap> {
    const response = {};
    const keys = Object.keys(validators);

    await Promise.all(keys.map(async (key: string) => {
      response[key] = await validators[key](params[key]);
    })) as any;

    return response;
  }

  /**
   * Runs and enforces all params validations.
   * 
   * @param param The value to be validated
   * @param validator The ParamValidator instance
   */
  public static async all(params: ValidatorInputMap, validators: ParamValidatorMap): Promise<boolean> {
    const result = await this.map(params, validators);
    const keys = Object.keys(result);
    return keys.reduce((aggr: boolean, next: string) => (aggr && result[next]), true);
  }
}
