import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routers";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

const PORT: number = Number(process.env.PORT) || 5000;
app.listen(PORT);
