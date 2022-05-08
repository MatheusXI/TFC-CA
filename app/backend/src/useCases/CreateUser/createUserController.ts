import { NextFunction, Request, Response } from 'express';
import CreateUserUseCase from './createUserUseCase';

export default class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      this.createUserUseCase.execute(req.body);
      return res.status(201).send();
    } catch (error: any) {
      next(error);
    }
  }
}
