import { libcApi } from './libc-api';

describe('libcApi', () => {
  it('should work', () => {
    expect(libcApi()).toEqual('libc-api');
  });
});
