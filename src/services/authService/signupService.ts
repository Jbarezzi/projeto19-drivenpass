import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { ISign } from "../../interfaces/authInterfaces";
import * as authRepository from "../../repositories/authRepository";
import * as errorFactory from "../../utils/errorFactory";

export async function signup(newUser: ISign) {
  await verifyIfEmailExists(newUser.email);
  newUser.password = await encryptPassword(newUser.password);
  await createUser(newUser);
  await authRepository.insert(newUser);
}

async function verifyIfEmailExists(email: string) {
  const hasUser: User | null = await authRepository.findByEmail(email);
  if (hasUser !== null) {
    throw errorFactory.conflictError(
      "There's already a user registered with this email."
    );
  }
}

async function encryptPassword(password: string) {
  const SALT_ROUNDS = 10;
  const encryptedPassword = bcrypt.hash(password, SALT_ROUNDS);
  return encryptedPassword;
}

async function createUser(newUser: ISign) {}
