import {
  IInsertCredentialData,
  IRequestCredentialData,
} from "../../interfaces/credentialInterfaces";
import * as credentialRepository from "../../repositories/credentialRepository";
import { encryptPassword } from "../../utils/cryptr";
import { conflictError } from "../../utils/errorFactory";

export async function create(
  newCredential: IRequestCredentialData,
  userId: number
) {
  const fullCredential: IInsertCredentialData = { ...newCredential, userId };
  await verifyIfCredentialIsDuplicated(newCredential.title, userId);
  fullCredential.password = encryptPassword(fullCredential.password);
  await credentialRepository.insert(fullCredential);
}

async function verifyIfCredentialIsDuplicated(title: string, userId: number) {
  const result = await credentialRepository.getByTitleAndUserId(title, userId);
  if (result !== null) {
    throw conflictError("The title already exists.");
  }
}
