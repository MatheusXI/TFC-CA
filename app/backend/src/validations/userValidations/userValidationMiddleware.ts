import { NextFunction, Request, Response } from 'express';
import userSchema from './userSchema';

const userValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validate = await userSchema.validateAsync(req.body);
    console.log(validate, 'validate userValidationMiddleware');

    return next();
  } catch (error: any) {
    console.log(error, 'error userValidationMiddleware');
    next(error);
  }
};
export default userValidationMiddleware;
