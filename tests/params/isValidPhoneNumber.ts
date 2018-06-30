import Validate, { Params } from '../../lib';
import Server from 'ts-framework';

describe('lib.params.isValidPhoneNumber', () => {
  it('should validate a phone number', async () => {
    expect(await Validate.param('+5511987654321', Params.isValidPhoneNumber)).toBe(true);
  });

  it('should not validate an undefined phone number', async () => {
    expect(await Validate.param(undefined, Params.isValidPhoneNumber)).toBe(false);
  });

  it('should not validate an empty phone number', async () => {
    expect(await Validate.param('', Params.isValidPhoneNumber)).toBe(false);
  });

  it('should not validate an invalid phone number', async () => {
    expect(await Validate.param('abcd', Params.isValidPhoneNumber)).toBe(false);
  });
});
