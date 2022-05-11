import { NextFunction, Request, Response } from 'express';
import GetTeamByIdUsecase from './getTeamByIdUseCase';

export default class GetTeamByIdController {
  constructor(private getTeamByIdUseCase: GetTeamByIdUsecase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const team = await this.getTeamByIdUseCase.execute(id);
      return res.status(200).json(team);
    } catch (error) {
      next(error);
    }
  }
}
