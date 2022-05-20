import { NextFunction, Request, Response } from 'express';

import PatchMatchUseCase from './patchMatchUseCase';

export default class PatchMatchController {
  constructor(private patchMatchUseCase: PatchMatchUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (id) {
        const data = { id: +id, ...req.body };
        const matches = await this.patchMatchUseCase.execute(data);
        return res.status(200).json(matches);
      }
    } catch (error) {
      next(error);
    }
  }
}
