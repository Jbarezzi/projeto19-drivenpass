import { Credential } from "@prisma/client";

export type ICreateCredential = Omit<Credential, "id" | "createdAt">;
