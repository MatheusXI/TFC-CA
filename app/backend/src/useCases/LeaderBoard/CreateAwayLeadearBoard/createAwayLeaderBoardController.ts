import { NextFunction, Request, Response } from 'express';
import CreateAwayLeaderBoardUseCase from './createAwayLeaderBoardUseCase';

export default class CreateAwayLeaderBoardController {
  constructor(private createAwayLeaderBoardUseCase: CreateAwayLeaderBoardUseCase) {}

  async handle(_req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this.createAwayLeaderBoardUseCase.execute();
      return res.status(201).json(teams);
    } catch (error) {
      next(error);
    }
  }
}
