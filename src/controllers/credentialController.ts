import { Request, Response } from "express";
import { IRequestCredentialData } from "../interfaces/credentialInterfaces";
import * as credentialController from "../services/credentialService";

export async function create(req: Request, res: Response) {
  const credential: IRequestCredentialData = req.body;
  const { id }: { id: number } = res.locals.payload.id;
  await credentialController.create(credential, id);
  res.sendStatus(201);
}
