import { Router } from "express";
import { authRouter } from "./authRouter";
import { credentialRouter } from "./credentialRouter";

export const router = Router();

router.use(authRouter);
router.use(credentialRouter);
