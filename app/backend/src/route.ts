import { Response, Router, Request } from 'express';
import createUserController from './useCases/CreateUser';
import loginController from './useCases/Login';
import loginValidationMiddleware from './validations/loginValidations/loginMiddleware';
import userValidationMiddleware from './validations/userValidations/userValidationMiddleware';

const router = Router();

router.post(
  '/users',
  userValidationMiddleware,
  (req: Request, res: Response) => createUserController.handle(req, res),
);

router.post(
  '/login',
  loginValidationMiddleware,
  (req: Request, res: Response) => loginController.handle(req, res),
);

export default router;
