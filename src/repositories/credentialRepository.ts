import client from "../database/prisma";
import { IInsertCredentialData } from "../interfaces/credentialInterfaces";

export async function getByTitleAndUserId(title: string, userId: number) {
  const result = await client.credential.findUnique({
    where: { userId_title: { userId, title } },
  });
  return result;
}

export async function insert(credential: IInsertCredentialData) {
  await client.credential.create({ data: credential });
}
