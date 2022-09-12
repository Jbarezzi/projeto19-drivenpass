import { Credential, ITitlesList } from "../../interfaces/credentialInterfaces";
import * as credentialRepository from "../../repositories/credentialRepository";
import { decryptPassword } from "../../utils/cryptr";

export async function getAllTitles(userId: number) {
  const titlesList: ITitlesList[] = await credentialRepository.getByUserId(
    userId
  );
  return titlesList;
}

export async function getCredential(id: number) {
  const credential: Credential | null = await credentialRepository.getById(id);
  credential!.password = decryptPassword(credential!.password);
  return credential;
}
