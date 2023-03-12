import Joi from "joi";

export const joiValidationPartialApplication = <ObjectType>(
  schema: Joi.ObjectSchema<ObjectType>
) => {
  return (data: ObjectType) => schema.validateAsync(data);
};