import { Request, Response } from "express";
import {
  Credential,
  IRequestCredentialData,
  ITitlesList,
} from "../interfaces/credentialInterfaces";
import * as credentialService from "../services/credentialService";

export async function create(req: Request, res: Response) {
  const credential: IRequestCredentialData = req.body;
  const { id }: { id: number } = res.locals.payload.id;
  await credentialService.create(credential, id);
  res.sendStatus(201);
}

export async function getAllTitles(_req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.payload;
  const titlesList: ITitlesList[] = await credentialService.getAllTitles(
    userId
  );
  res.status(200).send(titlesList);
}

export async function getCredential(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const credential: Credential | null = await credentialService.getCredential(
    id
  );
  res.status(200).send(credential);
}
