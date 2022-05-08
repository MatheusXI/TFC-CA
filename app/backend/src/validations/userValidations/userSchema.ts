import * as Joi from 'joi';

const userSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.base': 'Email must be a string',
      'any.required': 'Email is required',
      'string.email': 'Email inválido',
    }),
  username: Joi.string().min(3).required().messages({
    'string.base': 'Username must be a string',
    'any.required': 'Username is required',
    'string.min': 'Username must be longer than 7 characters',
  }),
  role: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.base': 'role must be a string',
      'any.required': 'role is required',
      'string.min': 'role must be longer than 7 characters',
    }),
  password: Joi.string().min(8).required().messages({
    'string.base': 'Password must be a string',
    'any.required': 'Password is required',
    'string.min': 'Password must be longer than 7 characters',
  }),
});

export default userSchema;
