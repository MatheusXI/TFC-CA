import { NextFunction, Request, Response } from 'express';
import loginSchema from './loginSchema';

const loginValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await loginSchema.validateAsync(req.body);

    return next();
  } catch (error: any) {
    next(error);
  }
};
export default loginValidationMiddleware;
