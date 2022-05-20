import { NextFunction, Request, Response } from 'express';
import GetTeamAndMatchesUseCase from './getTeamAndMatchesUseCase';

export default class GetTeamAndMatchesController {
  constructor(private getTeamAndMatchesUseCase: GetTeamAndMatchesUseCase) {}

  async handle(_req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this.getTeamAndMatchesUseCase.execute();
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }
}
