import { User } from "@prisma/client";

export type ISign = Omit<User, "id" | "createdAt">;
