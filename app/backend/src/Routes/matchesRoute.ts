import { Response, Router, Request, NextFunction } from 'express';
import createMatchValid from '../validations/matchesValidations/createMatchValidationMiddleware';
import getMatchesByProgressController from '../useCases/Matches/GetMatchesByProgress';

import getAllMatchesController from '../useCases/Matches/GetAllMatches';
import createMatchController from '../useCases/Matches/CreateMatch';
import patchMatchController from '../useCases/Matches/PatchMatch';
import updateMatchController from '../useCases/Matches/UpdateMatch';

const matchesRouter = Router();

matchesRouter.get(
  '/',

  (req: Request, res: Response, next: NextFunction) =>
    getMatchesByProgressController.handle(req, res, next),

  (req: Request, res: Response, next: NextFunction) =>
    getAllMatchesController.handle(req, res, next),
);

matchesRouter.post(
  '/',
  createMatchValid,
  (req: Request, res: Response, next: NextFunction) =>
    createMatchController.handle(req, res, next),
);

matchesRouter.patch(
  '/:id/finish',
  (req: Request, res: Response, next: NextFunction) =>
    patchMatchController.handle(req, res, next),
);

matchesRouter.patch(
  '/:id',
  (req: Request, res: Response, next: NextFunction) =>
    updateMatchController.handle(req, res, next),
);
/* matcheRouter.get('/:id', (req: Request, res: Response, next: NextFunction) =>
  getMatcheByIdController.handle(req, res, next)); */

export default matchesRouter;
