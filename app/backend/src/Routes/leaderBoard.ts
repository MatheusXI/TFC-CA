import { Response, Router, Request, NextFunction } from 'express';
import getTeamByIdController from '../useCases/Teams/GetTeamById';
import getTeamAndMatchesController from '../useCases/Teams/GetTeamAndMatches';
import createLeaderBoardController from '../useCases/LeaderBoard/CreateLeaderBoard';

const leaderRouter = Router();

leaderRouter.get('/', (req: Request, res: Response, next: NextFunction) =>
  createLeaderBoardController.handle(req, res, next));

leaderRouter.get('/teste', (req: Request, res: Response, next: NextFunction) =>
  getTeamAndMatchesController.handle(req, res, next));

leaderRouter.get('/:id', (req: Request, res: Response, next: NextFunction) =>
  getTeamByIdController.handle(req, res, next));

/* router.post(
  '/login',
  loginValidationMiddleware,
  (req: Request, res: Response, next: NextFunction) =>
    loginController.handle(req, res, next),
);

router.get(
  '/login/validate',
  (req: Request, res: Response, next: NextFunction) =>
    loginValidateController.handle(req, res, next),
); */

export default leaderRouter;
