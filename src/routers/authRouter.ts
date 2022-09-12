import { Router } from "express";
import * as authController from "controllers/authController";
import { joiValidator } from "middlewares/joiValidator";
import { signupSchema } from "schemas/authSchemas";

export const authRouter = Router();

authRouter.post("/signup", joiValidator(signupSchema), authController.signup);
