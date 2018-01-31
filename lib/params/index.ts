import isValidId from './isValidId';
import isValidName from './isValidName';
import isValidEmail from './isValidEmail';
import isValidUsername from './isValidUsername';
import isValidPassword from './isValidPassword';
import { ParamValidator, ParamValidatorMiddleware } from 'index';

export { isValidId, isValidEmail, isValidPassword };

/**
 * Exports the available param validators as middlewares
 */
export default {
  isValidId,
  isValidName,
  isValidEmail,
  isValidUsername,
  isValidPassword,
};
