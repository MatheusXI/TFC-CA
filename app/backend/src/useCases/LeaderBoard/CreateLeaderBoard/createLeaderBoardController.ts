import { NextFunction, Request, Response } from 'express';
import CreateLeaderBoardUseCase from './createLeaderBordUseCase';

export default class CreateLeaderBoardController {
  constructor(private createLeaderBoardUseCase: CreateLeaderBoardUseCase) {}

  async handle(_req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this.createLeaderBoardUseCase.execute();
      console.log(teams);

      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }
}
