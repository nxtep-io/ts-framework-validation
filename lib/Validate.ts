
import * as ParamComposition from './ParamComposition';
import { ParamValidator, ParamValidatorMap } from './ParamValidator';
import { default as ParamValidatorMiddleware } from './ParamValidatorMiddleware';

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
   * Gets an Express middleware for a param validation.
   * 
   * @param param The param name to be validated
   * @param validator The ParamValidator instance
   */
  public static middleware(param: string, validator: ParamValidator) {
    return async (req, res, next) => new ParamValidatorMiddleware(param, validator).middleware(req, res, next);
  }

  /**
   * Gets a parallel composition builder for generating an Express middleware.  
   * The middleware will run all validator in parallel and throw a list of invalid fields.
   */
  public static parallelCompose(params: { [label: string]: ParamValidator }) {
    return ParamComposition.asyncWrapGroup(params);
  }

  /**
   * Gets a serial composition builder for generating an Express middleware.  
   * The middleware will run all validator in series and throw the first invalid field.
   */
  public static serialCompose(params: { [label: string]: ParamValidator }) {
    return ParamComposition.syncWrapGroup(params);
  }

  /**
   * Gets an one of composition builder for generating an Express middleware.  
   * The middleware will run all validator in parallel and throw the invalidMessage if all validations fail.
   */
  public static oneOfCompose(params: { [label: string]: ParamValidator }, invalidMessage: string) {
    return ParamComposition.wrapOrGroup(params, invalidMessage);
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
