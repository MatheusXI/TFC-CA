import { NextFunction, Request, Response } from 'express';
import CustomError from '../../../auxMiddlewares/Erro/CustomError';
import CreateMatchUseCase from './createMatchUseCase';

export default class CreateMatchController {
  constructor(private createMatchUseCase: CreateMatchUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      if (token) {
        const matchPlusToken = {
          match: req.body,
          token,
        };
        const matches = await this.createMatchUseCase.execute(matchPlusToken);
        return res.status(201).json(matches);
      }
      const noToken = new CustomError(401, 'No Token');
      next(noToken);
    } catch (error) {
      next(error);
    }
  }
}
