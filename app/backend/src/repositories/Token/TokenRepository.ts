import { JwtPayload } from 'jsonwebtoken';
import ILoginDTO from '../../useCases/Users/Login/loginDTO';
import tokenVerify from '../../auxFunc/Token/tokenVerify';
import tokenGenerate from '../../auxFunc/Token/tokenGenerate';
import ITokenRepository from './ITokenRepository';
import IUserRepository from '../User/IUserRepository';
import hashVerify from '../../auxFunc/hash/hashVerify';
import CustomError from '../../auxMiddlewares/Erro/CustomError';

export default class TokenRepository implements ITokenRepository {
  private generate;

  private verify;

  private hashCompare;

  constructor(private userRepository: IUserRepository) {
    this.generate = tokenGenerate;
    this.verify = tokenVerify;
    this.hashCompare = hashVerify;
  }

  async tokenGenerate(data: ILoginDTO): Promise<string> {
    const token = await this.generate(data);
    return token;
  }

  async tokenVerify(token: string): Promise<string | JwtPayload> {
    const data = await this.verify(token);
    return data;
  }

  async tokenAuthenticate(data: JwtPayload) {
    const { email, password } = data;
    const user = await this.userRepository.findByEmail(email);
    if (!user) return false;
    const verifyPassword = await this.hashCompare(password, user);
    if (!verifyPassword) return false;
    return user;
  }

  async userAuthenticate(token: string) {
    const tokenIsValid = await this.tokenVerify(token);
    if (typeof tokenIsValid === 'string') {
      throw new CustomError(401, 'Token required');
    }
    const authenticated = await this.tokenAuthenticate(tokenIsValid);
    if (!authenticated) throw new CustomError(401, 'Token Invalido');
    return authenticated;
  }
}
