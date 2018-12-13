// TODO: Put this in a prefs file
const USER_NAME_MIN = 2;

/**
 * Checks if param is a valid user name.
 * 
 * @param {String} name The param to be validated
 */
export default async (name: string = ''): Promise<boolean> => {
  if (name && name.length >= USER_NAME_MIN) {
    return true;
  }
};
