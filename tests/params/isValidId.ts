import Validate, { Params } from '../../lib';
import Server from 'ts-framework';

describe('lib.params.isValidId', () => {
  it('should validate a real ObjectId', async () => {
    expect(await Validate.param('5a6e3338f42cac8e6af23c6a', Params.isValidId)).toBe(true);
  });

  it('should not validate an invalid ObjectId', async () => {
    const result = await Validate.param('abc', Params.isValidId);
    expect(result).toBeFalsy();
  });

  it('should not validate an undefined ObjectId', async () => {
    const result = await Validate.param(undefined, Params.isValidId);
    expect(result).toBeFalsy();
  });
});
