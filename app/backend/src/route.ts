import { Response, Router, Request } from 'express';
import createUserController from './useCases/CreateUser';

const router = Router();

router.post('/users', (req: Request, res: Response) => createUserController.handle(req, res));

export default router;
