import Validate, { Params } from '../../lib';
import Server from 'ts-framework';

describe('lib.params.isValidUsername', () => {
  it('should validate a real username', async () => {
    expect(await Validate.param('sampleuser123', Params.isValidUsername)).toBe(true);
  });

  it('should not validate an empty, undefined or wront typed username', async () => {
    expect(Validate.param(undefined, Params.isValidUsername)).resolves.toBeFalsy();
    expect(Validate.param(null, Params.isValidUsername)).resolves.toBeFalsy();
    expect(Validate.param(true, Params.isValidUsername)).resolves.toBeFalsy();
    expect(Validate.param(1, Params.isValidUsername)).resolves.toBeFalsy();
    expect(Validate.param('', Params.isValidUsername)).resolves.toBeFalsy();
  });

  it('should not validate an invalid username', async () => {
    expect(Validate.param('12', Params.isValidUsername)).resolves.toBeFalsy();
    expect(Validate.param('faustão_da_silva', Params.isValidUsername)).resolves.toBeFalsy();
    expect(Validate.param(
      'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', Params.isValidUsername),
    ).resolves.toBeFalsy();
  });
});
