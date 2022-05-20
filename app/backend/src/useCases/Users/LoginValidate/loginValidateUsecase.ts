import ITokenRepository from '../../../repositories/Token/ITokenRepository';
import CustomError from '../../../auxMiddlewares/Erro/CustomError';

export default class LoginValidateUseCase {
  constructor(
    private tokenRepository: ITokenRepository,
  ) {}

  async execute(data: string) {
    const userToken = await this.tokenRepository.tokenVerify(data);
    if (typeof userToken === 'string') {
      throw new CustomError(401, 'Invalid Token');
    }
    const userAuthenticated = await this.tokenRepository.tokenAuthenticate(
      userToken,
    );
    if (typeof userAuthenticated === 'boolean') throw new CustomError(401, 'Invalid Token');
    return userAuthenticated.role;
  }
}
