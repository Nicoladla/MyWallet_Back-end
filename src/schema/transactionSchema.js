import joi from "joi";

const transactionSchema = joi.object({
  value: joi.number().min(0.01).required(),
  description: joi.string().min(3).max(20).required(),
  type: joi.string().valid("deposit", "withdraw").required(),
});

export default transactionSchema;
