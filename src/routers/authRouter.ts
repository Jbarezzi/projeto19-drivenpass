import { Router } from "express";
import { joiValidator } from "../middlewares/joiValidator";
import { signupSchema } from "../schemas/authSchemas";
import * as authController from "../controllers/authController";

export const authRouter = Router();

authRouter.post("/signup", joiValidator(signupSchema), authController.signup);
