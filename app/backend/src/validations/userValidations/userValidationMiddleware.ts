import { NextFunction, Request, Response } from 'express';
import userSchema from './userSchema';

const userValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await userSchema.validateAsync(req.body);

    return next();
  } catch (error: any) {
    next(error);
  }
};
export default userValidationMiddleware;
