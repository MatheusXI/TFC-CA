import { NextFunction, Request, Response } from 'express';
import GetMatchesByProgressUseCase from './getMatchesByProgressUseCase';

export default class GetMatchesByProgressController {
  constructor(private getMatchesByProgressUseCase: GetMatchesByProgressUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { inProgress } = req.query;
      if (inProgress) {
        const matches = await this.getMatchesByProgressUseCase.execute(
          inProgress?.toString(),
        );
        return res.status(200).json(matches);
      } next();
    } catch (error) {
      next(error);
    }
  }
}
