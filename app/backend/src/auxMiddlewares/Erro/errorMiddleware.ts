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

  const { code, message } = newErro;
  response.status(code).json({ message });
}

export default errorMiddleware;
