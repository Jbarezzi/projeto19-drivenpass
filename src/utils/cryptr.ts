import Cryptr from "cryptr";

const SECRET = process.env.ENCRYPT_SECRET!;
const cryptr = new Cryptr(SECRET);

export function encryptPassword(password: string) {
  const encrypted = cryptr.encrypt(password);
  return encrypted;
}

export function decryptPassword(password: string) {
  const decrypted = cryptr.decrypt(password);
  return decrypted;
}
