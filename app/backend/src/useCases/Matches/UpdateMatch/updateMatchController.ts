import { NextFunction, Request, Response } from 'express';

import UpdateMatchUseCase from './updateMatchUseCase';

export default class UpdateMatchController {
  constructor(private updateMatchUseCase: UpdateMatchUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      if (id) {
        const { homeTeamGoals, awayTeamGoals } = req.body;
        const idNum = +id;
        const matches = await this.updateMatchUseCase.execute({
          id: idNum,
          homeTeamGoals,
          awayTeamGoals,
        });
        return res.status(200).json(matches);
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}
