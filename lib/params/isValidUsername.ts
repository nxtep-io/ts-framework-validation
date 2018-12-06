// TODO: Put this in a prefs file
const USER_USERNAME_MIN = 3;
const USER_USERNAME_MAX = 64;

// Only alphanum, under, plus and hyphen
const USER_USERNAME_REGEX = /^[a-zA-Z0-9\+\-\_]+$/;

/**
 * Checks if param is a valid user username.
 * 
 * @param {String} username The param to be validated
 */
export default async (username: string = ''): Promise<boolean> => {
  if (!username || !username.length) {
    return false;
  } else if (username.length < USER_USERNAME_MIN) {
    return false;
  } else if (username.length > USER_USERNAME_MAX) {
    return false;
  } else if (!username.match(USER_USERNAME_REGEX)) {
    return false;
  }
  return true;
};
