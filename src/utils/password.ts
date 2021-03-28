import * as c from 'crypto';

const saltLength = 16;

export const generatePasswordAsync = async (password: string, length = 64) => {
  const saltBuffer = c.randomBytes(saltLength);
  const p = await scryptAsync(password, saltBuffer, length);
  return [p.toString('base64'), saltBuffer.toString('base64'), length].join();
};

export const verifyPasswordAsync = async (
  password: string,
  hashedPassword: string,
) => {
  const [hash1, salt, l] = hashedPassword.split(',');
  const length = parseInt(l);
  const buf = Buffer.from(salt, 'base64');
  const hash2 = (await scryptAsync(password, buf, length)).toString('base64');
  return hash1 === hash2;
};

export const scryptAsync = (
  password: c.BinaryLike,
  salt: c.BinaryLike,
  keylen: number,
) =>
  new Promise<Buffer>((res, rej) => {
    c.scrypt(password, salt, keylen, (e, buf) => {
      e ? rej(e) : res(buf);
    });
  });
