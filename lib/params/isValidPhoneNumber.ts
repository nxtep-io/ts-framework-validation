
import * as Phone from 'phone';

/**
 * Checks if param is a valid international phone number.
 *
 * @param {String} phoneNumber The param to be validated
 */
export default async (phoneNumber: string = ''): Promise<boolean> => {
  if (phoneNumber && phoneNumber.length && Phone(phoneNumber).length) {
    return true;
  }
  return false;
};
