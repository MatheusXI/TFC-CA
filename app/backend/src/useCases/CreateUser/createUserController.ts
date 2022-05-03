import { Request, Response } from 'express';
import CreateUserUseCase from './createUserUseCase';

export default class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      this.createUserUseCase.execute(req.body);
      return res.status(201).send();
    } catch (error: any) {
      return res
        .status(400)
        .json({ message: error.message || 'internal server Error' });
    }
  }
}
