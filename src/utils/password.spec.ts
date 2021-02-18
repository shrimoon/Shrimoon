import { generatePasswordAsync, comparePasswordAsync } from './password';

describe('password', () => {
  it('match 2 passwords', async () => {
    const password = 'hello12345';
    const hash = await generatePasswordAsync(password);
    expect(await comparePasswordAsync(password, hash)).toEqual(true);
  });
  it('dismatch 2 passwords', async () => {
    const password = 'hello12345';
    const hash = await generatePasswordAsync(password);
    expect(await comparePasswordAsync('c@s&d0g', hash)).toEqual(false);
  });
});
