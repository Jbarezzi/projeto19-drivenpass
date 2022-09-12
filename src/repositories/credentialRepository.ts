import client from "../database/prisma";
import {
  Credential,
  IInsertCredentialData,
  ITitlesList,
} from "../interfaces/credentialInterfaces";

export async function getByTitleAndUserId(title: string, userId: number) {
  const result = await client.credential.findUnique({
    where: { userId_title: { userId, title } },
  });
  return result;
}

export async function insert(credential: IInsertCredentialData) {
  await client.credential.create({ data: credential });
}

export async function getByUserId(userId: number) {
  const titlesList: ITitlesList[] = await client.credential.findMany({
    where: { userId },
    select: { id: true, title: true },
  });
  return titlesList;
}

export async function getById(id: number) {
  const credential: Credential | null = await client.credential.findUnique({
    where: { id },
  });
  return credential;
}
