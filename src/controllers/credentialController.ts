import { Request, Response } from "express";
import { ICreateCredential } from "../interfaces/credentialInterfaces";
import * as credentialController from "../services/credentialService";

export async function create(req: Request, res: Response) {
  const credential: ICreateCredential = req.body;
  await credentialController.create(credential);
  res.sendStatus(201);
}
