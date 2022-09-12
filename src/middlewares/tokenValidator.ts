import * as jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { unauthorizedError } from "../utils/errorFactory";

export async function tokenValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (authorization === undefined) {
    throw unauthorizedError("token");
  }
  const token = authorization?.replace("Bearer ", "");
  const JWT_SECRET = process.env.TOKEN_SECRET!;
  jwt.verify(token, JWT_SECRET, (error, payload) => {
    if (error !== null) {
      throw unauthorizedError("valid token");
    }
    res.locals.payload = payload;
    next();
  });
}
