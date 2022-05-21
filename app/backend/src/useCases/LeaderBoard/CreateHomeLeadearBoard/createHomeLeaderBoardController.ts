import { NextFunction, Request, Response } from 'express';
import CreateHomeLeaderBoardUseCase from './createHomeLeaderBoardUseCase';

export default class CreateHomeLeaderBoardController {
  constructor(private createHomeLeaderBoardUseCase: CreateHomeLeaderBoardUseCase) {}

  async handle(_req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this.createHomeLeaderBoardUseCase.execute();
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }
}
