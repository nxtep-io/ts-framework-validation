import Validate, { Params } from '../../lib';
import Server from 'ts-framework';

describe('lib.params.isValidEmail', () => {
  it('should validate a real email', async () => {
    expect(await Validate.param('test@company.com', Params.isValidEmail)).toBe(true);
  });

  it('should not validate an invalid email', async () => {
    const result = await Validate.param('test/a', Params.isValidEmail);
    expect(result).toBeFalsy();
  });

  it('should not validate an undefined email', async () => {
    const result = await Validate.param(undefined, Params.isValidEmail);
    expect(result).toBeFalsy();
  });
});
