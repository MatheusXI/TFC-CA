import { NextFunction, Request, Response } from 'express';
import matchesSchema from './matchesSchema';

const createMatchValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await matchesSchema.validateAsync(req.body);
    const { homeTeam, awayTeam } = req.body;
    if (homeTeam === awayTeam) {
      return res.status(404).json({
        message: 'It is not possible to create a match with two equal teams',
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};
export default createMatchValidationMiddleware;
