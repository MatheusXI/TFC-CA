import { Response, Router, Request, NextFunction } from 'express';
import createUserController from './useCases/Users/CreateUser';
import loginController from './useCases/Users/Login';
import loginValidateController from './useCases/Users/LoginValidate';
import loginValidationMiddleware from './validations/loginValidations/loginMiddleware';
import userValidationMiddleware from './validations/userValidations/userValidationMiddleware';

const router = Router();

router.post(
  '/users',
  userValidationMiddleware,
  (req: Request, res: Response, next: NextFunction) =>
    createUserController.handle(req, res, next),
);

router.post(
  '/login',
  loginValidationMiddleware,
  (req: Request, res: Response, next: NextFunction) =>
    loginController.handle(req, res, next),
);

router.get(
  '/login/validate',
  (req: Request, res: Response, next: NextFunction) =>
    loginValidateController.handle(req, res, next),
);

export default router;
