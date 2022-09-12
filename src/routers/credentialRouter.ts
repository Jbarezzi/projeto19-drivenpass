import { Router } from "express";
import { joiValidator } from "../middlewares/joiValidator";
import * as credentialController from "../controllers/credentialController";
import { credentialSchema } from "../schemas/credentialSchemas";
import { tokenValidator } from "../middlewares/tokenValidator";

export const credentialRouter = Router();

credentialRouter.post(
  "/credential",
  joiValidator(credentialSchema),
  tokenValidator,
  credentialController.create
);
credentialRouter.get(
  "/credentials",
  tokenValidator,
  credentialController.getAllTitles
);
credentialRouter.get(
  "/credentials/:id",
  tokenValidator,
  credentialController.getCredential
);
credentialRouter.delete(
  "/credentials/:id",
  tokenValidator,
  credentialController.deleteCredential
);
