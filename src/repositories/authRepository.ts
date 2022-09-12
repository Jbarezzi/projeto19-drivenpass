import client from "database/prisma";

export async function findUserByEmail(email: string) {
  const user = await client.user.findUnique({ where: { email } });
  return user;
}
