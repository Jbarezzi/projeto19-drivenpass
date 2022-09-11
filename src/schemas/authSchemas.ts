import Joi from "joi";

export const signupSchema = Joi.object({
  email: Joi.string().email().trim().required().message("teste"),
  password: Joi.string().trim().min(10).required(),
});
