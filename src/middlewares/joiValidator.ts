import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import errorFactory from "utils/errorFactory";

const joiValidator = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const body: object = req.body;
    const { error } = schema.validate(body);
    if (error !== undefined) {
      const messages: string[] = error?.details.map((detail) => detail.message);
      throw errorFactory.unprocessable(messages);
    }
    next();
  };
};

export default joiValidator;
