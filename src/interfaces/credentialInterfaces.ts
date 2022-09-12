import { Credential } from "@prisma/client";

export type IRequestCredentialData = Omit<
  Credential,
  "id" | "createdAt" | "userId"
>;

export type IInsertCredentialData = Omit<Credential, "id" | "createdAt">;
