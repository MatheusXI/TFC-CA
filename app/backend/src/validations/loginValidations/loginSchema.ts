import * as Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .min(5)
    .required()
    .messages({
      'string.base': 'Incorrect email or password',
      'any.required': 'All fields must be filled',
      'string.email': 'Incorrect email or password',
      'string.min': 'Email must be longer than 5 characters',
    }),
  password: Joi.string().min(8).required().messages({
    'string.base': 'Password must be a string',
    'any.required': 'All fields must be filled',
    'string.min': 'Password must be longer than 7 characters',
  }),
});

export default loginSchema;
