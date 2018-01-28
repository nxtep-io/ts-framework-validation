import Validate, { Params } from '../../lib';
import Server from 'ts-framework';

describe('lib.params.isValidPassword', () => {
  it('should validate a real password', async () => {
    expect(await Validate.param('a1b2c3d4e5', Params.isValidPassword)).toBe(true);
  });

  it('should not validate an invalid password', async () => {
    const result = await Validate.param('123', Params.isValidPassword);
    expect(result).toBeFalsy();
  });

  it('should not validate an empty password', async () => {
    const result = await Validate.param('', Params.isValidPassword);
    expect(result).toBeFalsy();
  });

  it('should not validate an undefined password', async () => {
    const result = await Validate.param(undefined, Params.isValidPassword);
    expect(result).toBeFalsy();
  });
});
