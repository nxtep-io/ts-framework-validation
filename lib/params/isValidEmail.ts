/**
 * TODO: Move to a config file.
 *
 * Reference: http://emailregex.com
 */
/* tslint:disable-next-line:max-line-length */
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Checks if param is a valid user email.
 *
 * @param {String} email The param to be validated
 */
export default async (email: string = ''): Promise<boolean> => {
  if (email && email.length && email.match(EMAIL_REGEX)) {
    return true;
  }
  return false;
};
