import joi from "joi";

export const userSchema = joi.object({
  name: joi.string().required().min(3),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

export const userLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});