import isValidId from './isValidId';
import isValidName from './isValidName';
import isValidEmail from './isValidEmail';
import isValidUsername from './isValidUsername';
import isValidPassword from './isValidPassword';
import isValidPhoneNumber from './isValidPhoneNumber';
import { ParamValidator, ParamValidatorMiddleware } from 'index';

export { isValidId, isValidEmail, isValidPassword, isValidPhoneNumber };

/**
 * Exports the available param validators as middlewares
 */
export default {
  isValidId,
  isValidName,
  isValidEmail,
  isValidUsername,
  isValidPassword,
  isValidPhoneNumber,
};
