import Joi from "joi";

export const signupSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().min(10).required(),
});

export const signinSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required(),
});
