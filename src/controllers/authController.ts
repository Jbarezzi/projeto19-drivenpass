import { Request, Response } from "express";
import { CreateUserData } from "interfaces/authInterfaces";
import * as authService from "services/authService";

export async function signup(req: Request, res: Response) {
  const newUser: CreateUserData = req.body;
  await authService.signup(newUser);
  res.sendStatus(204);
}
