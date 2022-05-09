import { Response, Router, Request, NextFunction } from 'express';
import createUserController from './useCases/CreateUser';
import loginController from './useCases/Login';
import loginValidationMiddleware from './validations/loginValidations/loginMiddleware';
import userValidationMiddleware from './validations/userValidations/userValidationMiddleware';

const router = Router();

router.post(
  '/users',
  userValidationMiddleware,
  (req: Request, res: Response, next: NextFunction) => createUserController.handle(req, res, next),
);

router.post(
  '/login',
  loginValidationMiddleware,
  (req: Request, res: Response, next: NextFunction) => loginController.handle(req, res, next),
);

export default router;
