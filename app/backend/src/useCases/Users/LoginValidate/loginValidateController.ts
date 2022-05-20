import { NextFunction, Request, Response } from 'express';
import LoginValidateUseCase from './loginValidateUsecase';

export default class LoginValidateController {
  constructor(private loginValidateUseCase: LoginValidateUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      if (token) {
        const userRole = await this.loginValidateUseCase.execute(token);
        return res.status(200).json(userRole);
      }
    } catch (error) {
      next(error);
    }
  }
}
