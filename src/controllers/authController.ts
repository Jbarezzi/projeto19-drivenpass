import { Request, Response } from "express";
import { ISign } from "../interfaces/authInterfaces";
import { authService } from "../services/authService";

export async function signup(req: Request, res: Response) {
  const newUser: ISign = req.body;
  await authService.signup(newUser);
  res.sendStatus(204);
}
