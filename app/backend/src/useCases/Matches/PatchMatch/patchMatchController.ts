import { NextFunction, Request, Response } from 'express';

import PatchMatchUseCase from './patchMatchUseCase';

export default class PatchMatchController {
  constructor(private patchMatchUseCase: PatchMatchUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      console.log(id, 'id patch controller');
      if (id) {
        const data = { id: +id, ...req.body };
        const matches = await this.patchMatchUseCase.execute(data);
        return res.status(200).json(matches);
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}
