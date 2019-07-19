/**
 * A simple regex for validating Object Ids as hex strings.
 */
const checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');

/**
 * Checks if param is a valid mongo Object Id.
 *
 * @param {String} id The param to be validated
 */
export default async (id: string): Promise<boolean> => {
  const str = id && id.toString ? id.toString() : undefined;
  if (str && checkForHexRegExp.test(str)) {
    return true;
  }
  return false;
};
