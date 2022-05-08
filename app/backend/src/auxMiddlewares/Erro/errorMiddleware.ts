import { NextFunction, Request, Response } from 'express';
import ErroType from '../../validations/Erro/erro';
import CustomError from './CustomError';

function errorMiddleware(
  error: CustomError | any,
  request: Request,
  response: Response,
  _next: NextFunction,
) {
  const newErro = new ErroType(error).erro;

  const status = newErro.status || 500;
  const message = newErro.message || 'Internal server error';
  response.status(status).json({
    status,
    message,
  });
}

export default errorMiddleware;
