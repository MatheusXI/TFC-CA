import { NextFunction, Request, Response } from 'express';
import matchesSchema from './matchesSchema';

const createMatchValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await matchesSchema.validateAsync(req.body);
    const { homeTeam, awayTeam, inProgress } = req.body;
    if (homeTeam === awayTeam || !inProgress) {
      return res.status(404).json({ messaage: 'Algo deu errado' });
    } next();
  } catch (error) {
    next(error);
  }
};
export default createMatchValidationMiddleware;
