import { Response, Router, Request, NextFunction } from 'express';
import createHomeLeaderBoardController from '../useCases/LeaderBoard/CreateHomeLeadearBoard';
import createLeaderBoardController from '../useCases/LeaderBoard/CreateLeaderBoard';

const leaderRouter = Router();

leaderRouter.get('/', (req: Request, res: Response, next: NextFunction) =>
  createLeaderBoardController.handle(req, res, next));

leaderRouter.get('/home', (req: Request, res: Response, next: NextFunction) =>
  createHomeLeaderBoardController.handle(req, res, next));
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
