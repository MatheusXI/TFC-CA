import { NextFunction, Request, Response } from 'express';
import GetAllMatchesUseCase from './getAllMatchesUseCase';

export default class GetAllMatchesController {
  constructor(private getAllMatchesUseCase: GetAllMatchesUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const matches = await this.getAllMatchesUseCase.execute();
      return res.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  }
}
