import joi from "joi";

const transactionSchema = joi.object({
  value: joi.number().min(1).required(),
  type: joi.string().valid("deposit", "withdraw").required(),
});

export default transactionSchema;
