import { NextFunction, Request, Response } from 'express';

import LoginUseCase from './loginUseCase';

export default class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const token = await this.loginUseCase.execute(req.body);
      return res.status(200).json(token);
    } catch (error: any) {
      next(error);
    }
  }
}
