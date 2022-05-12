import { NextFunction, Request, Response } from 'express';
import PatchFinishMatchUseCase from './patchFinishMatchUseCase';

export default class PatchFinishMatchController {
  constructor(private patchFinishMatchUseCase: PatchFinishMatchUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      console.log(id, 'id patch controller');
      if (id) {
        const matches = await this.patchFinishMatchUseCase.execute(id);
        return res.status(200).json(matches);
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}
