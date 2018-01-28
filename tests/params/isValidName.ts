import Validate, { Params } from '../../lib';
import Server from 'ts-framework';

describe('lib.params.isValidName', () => {
  it('should validate a real name', async () => {
    expect(await Validate.param('Test Name', Params.isValidName)).toBe(true);
  });

  it('should not validate an invalid name', async () => {
    const result = await Validate.param('', Params.isValidName);
    expect(result).toBeFalsy();
  });

  it('should not validate an undefined name', async () => {
    const result = await Validate.param(undefined, Params.isValidName);
    expect(result).toBeFalsy();
  });
});
