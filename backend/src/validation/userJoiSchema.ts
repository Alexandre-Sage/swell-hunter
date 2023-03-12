import Joi from "joi";
import { User } from "../types";

export const userJoiValidationSchema = Joi.object<User>({
  id: Joi.string().required(),
  userName: Joi.string()
    .min(3)
    .required()
    .messages({ "string.empty": "{joiError:'User name is required'}" }),
  password: Joi.string()
    .min(3)
    .required()
    .messages({ "string.empty": "{joiError:'Password is required'}" }),
  salt: Joi.string().required(),
  createdAt: Joi.date().required(),
  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.empty": "{joiError:'Email is required'}",
      "string.email": "{joiError:'Provided email is invalid'}",
    }),
  homeSpot: Joi.string().allow(null),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "{joiError:'Phone is required'}",
      "string.length": "{joiError:'Provided phone is invalid'}",
      "string.pattern.base": "{joiError:'Provided phone is invalid'}",
    }),
  updatedAt: Joi.date().required(),
});
