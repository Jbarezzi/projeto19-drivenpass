import { Credential } from "@prisma/client";
import * as credentialRepository from "../../repositories/credentialRepository";
import { notFoundError } from "../../utils/errorFactory";

export async function deleteCredential(id: number, userId: number) {
  await verifyIfCredentialExists(id);
  await verifyIfCredentialIsFromUser(id, userId);
  await credentialRepository.deleteCredential(id);
}

async function verifyIfCredentialExists(id: number) {
  const credential: Credential | null = await credentialRepository.getById(id);
  if (credential === null) {
    throw notFoundError("credential");
  }
}

async function verifyIfCredentialIsFromUser(id: number, userId: number) {
  const credential: Credential | null = await credentialRepository.getById(id);
  if (credential?.userId !== userId) {
    throw notFoundError("credential");
  }
}
