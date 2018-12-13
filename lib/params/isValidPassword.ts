/**
 * TODO: Move to a config file
 */
const PASSWORD_MIN = 8;

/**
 * TODO: Move to a config file
 */
const PASSWORD_MAX = 36;

/**
 * Checks if param is a valid user password.
 * 
 * @param {String} password The param to be validated
 */
export default async (password: string = ''): Promise<boolean> => {
  if (password && password.length >= PASSWORD_MIN && password.length <= PASSWORD_MAX) {
    return true;
  }
  return false;
};
