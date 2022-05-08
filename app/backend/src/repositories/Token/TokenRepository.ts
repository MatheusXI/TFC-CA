import { JwtPayload } from 'jsonwebtoken';
import ILoginDTO from '../../useCases/Login/loginDTO';
import tokenVerify from '../../auxFunc/Token/tokenVerify';
import tokenGenerate from '../../auxFunc/Token/tokenGenerate';
import ITokenRepository from './ITokenRepository';

export default class TokenRepository implements ITokenRepository {
  private generate;

  private verify;

  constructor() {
    this.generate = tokenGenerate;
    this.verify = tokenVerify;
  }

  async tokenGenerate(data: ILoginDTO): Promise<string> {
    const token = await this.generate(data);
    return token;
  }

  async tokenVerify(token: string): Promise<string | JwtPayload> {
    const data = await this.verify(token);
    return data;
  }
}
