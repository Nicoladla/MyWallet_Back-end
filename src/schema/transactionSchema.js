import joi from "joi";

const transactionSchema = joi.object({
  value: joi.number().min(1).required(),
  description: joi.string().min(3).max(60).required(),
  type: joi.string().valid("deposit", "withdraw").required(),
});

export default transactionSchema;
