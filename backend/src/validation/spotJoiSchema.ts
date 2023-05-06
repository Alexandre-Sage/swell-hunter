import Joi, { string } from "joi";
import { ObjectToDbTypeMapper, Spot, User } from "../types";
import { factory } from "typescript";

export const spotJoiValidationSchema = Joi.object<Spot>({
  id: Joi.string().required(),
  userId: string().required(),
  spotName: Joi.string()
    .min(3)
    .required()
    .messages({ "string.empty": "{joiError:'Spot name is required'}" }),
  createdAt: Joi.date().required(),
});

