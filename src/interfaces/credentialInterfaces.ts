import { Credential } from "@prisma/client";

export { Credential };

export type IRequestCredentialData = Omit<
  Credential,
  "id" | "createdAt" | "userId"
>;

export type IInsertCredentialData = Omit<Credential, "id" | "createdAt">;

export type ITitlesList = Omit<
  Credential,
  "url" | "username" | "userId" | "createdAt" | "password"
>;
