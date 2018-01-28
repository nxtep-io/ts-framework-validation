import Validate, { Params } from '../lib';
import Server from 'ts-framework';

describe('lib.Validate', () => {
  it('should run a simple param validation', async () => {
    expect(await Validate.param('Test Name', Params.isValidName)).toBe(true);
  });

  it('should run a simple param map validation', async () => {
    expect(await Validate.all({ name: 'TestName' }, { name: Params.isValidName })).toBe(true);
  });

  it('should run a simple param map validation', async () => {
    expect(await Validate.map({ name: 'TestName' }, { name: Params.isValidName })).toEqual({ name: true });
  });
});
