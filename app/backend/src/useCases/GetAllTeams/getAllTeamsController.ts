import { NextFunction, Request, Response } from 'express';
import GetAllTeamsUseCase from './getAllTeamsUseCase';

export default class GetAllTeamsController {
  constructor(private getAllTeamsUseCase: GetAllTeamsUseCase) {}

  async handle(_req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this.getAllTeamsUseCase.execute();
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }
}
