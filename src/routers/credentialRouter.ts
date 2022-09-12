import { Router } from "express";
import { joiValidator } from "../middlewares/joiValidator";
import * as credentialController from "../controllers/credentialController";

export const credentialRouter = Router();

credentialRouter.post("/credential", joiValidator, credentialController.create);
