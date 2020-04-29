import Joi from "@hapi/joi";

// Register Validation
export const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required().messages({
      "string.base": `"Username" should be a type of 'String'`,
      "string.empty": `"Username" cannot be an empty field`,
      "string.min": `"Username" should have a minimum length of {#limit}`,
      "any.required": `"Username" is a required field`,
    }),
    email: Joi.string().email().min(6).required().messages({
      "string.base": `"Email" should be a type of 'String'`,
      "string.email": `"Email" should be a valid email`,
      "string.empty": `"Email" cannot be an empty field`,
      "string.min": `"Email" should have a minimum length of {#limit}`,
      "any.required": `"Email" is a required field`,
    }),
    password: Joi.string().min(6).required().messages({
      "string.base": `"Password" should be a type of 'String'`,
      "string.empty": `"Password" cannot be an empty field`,
      "string.min": `"Password" should have a minimum length of {#limit}`,
      "any.required": `"Password" is a required field`,
    }),
  });

  return schema.validate(data, { abortEarly: false });
};

// Login Validation
export const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().min(6).required().messages({
      "string.base": `"Email" should be a type of 'String'`,
      "string.email": `"Email" should be a valid email`,
      "string.empty": `"Email" cannot be an empty field`,
      "string.min": `"Email" should have a minimum length of {#limit}`,
      "any.required": `"Email" is a required field`,
    }),
    password: Joi.string().min(6).required().messages({
      "string.base": `"Password" should be a type of 'String'`,
      "string.empty": `"Password" cannot be an empty field`,
      "string.min": `"Password" should have a minimum length of {#limit}`,
      "any.required": `"Password" is a required field`,
    }),
  });

  return schema.validate(data, { abortEarly: false });
};

export const itemValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(1).required().messages({
      "string.empty": `"Title" cannot be an empty field`,
      "string.min": `"Title" should have a minimum length of {#limit}`,
      "any.required": `"Title" is a required field`,
    }),
    description: Joi.string().required().messages({
      "string.empty": `"Description" cannot be an empty field`,
      "string.min": `"Description" should have a minimum length of {#limit}`,
      "any.required": `"Description" is a required field`,
    }),
    price: Joi.number().required().messages({
      "number.base": `"Price" should be a type of 'Number'`,
      "string.empty": `"Price" cannot be an empty field`,
      "any.required": `"Price" is a required field`,
    }),
    published: Joi.bool().required(),
  }).unknown(true);

  return schema.validate(data, { abortEarly: false });
};
