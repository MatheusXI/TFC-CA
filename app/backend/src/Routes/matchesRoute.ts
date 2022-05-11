import { Response, Router, Request, NextFunction } from 'express';
import getMatchesByProgressController from '../useCases/Matches/GetMatchesByProgress';

import getAllMatchesController from '../useCases/Matches/GetAllMatches';

const matchesRouter = Router();

matchesRouter.get(
  '/',

  (req: Request, res: Response, next: NextFunction) =>
    getMatchesByProgressController.handle(req, res, next),

  (req: Request, res: Response, next: NextFunction) =>
    getAllMatchesController.handle(req, res, next),
);

/* matcheRouter.get('/:id', (req: Request, res: Response, next: NextFunction) =>
  getMatcheByIdController.handle(req, res, next)); */

export default matchesRouter;
