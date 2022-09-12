import { Router } from "express";
import { joiValidator } from "../middlewares/joiValidator";
import * as credentialController from "../controllers/credentialController";
import { credentialSchema } from "../schemas/credentialSchemas";

export const credentialRouter = Router();

credentialRouter.post(
  "/credential",
  joiValidator(credentialSchema),
  credentialController.create
);
