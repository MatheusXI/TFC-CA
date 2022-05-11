import IUserRepository from '../../repositories/User/IUserRepository';
import ITokenRepository from '../../repositories/Token/ITokenRepository';
import CustomError from '../../auxMiddlewares/Erro/CustomError';

export default class LoginValidateUseCase {
  constructor(
    private userRepository: IUserRepository,
    private tokenRepository: ITokenRepository,
  ) {}

  async execute(data: string) {
    const userToken = await this.tokenRepository.tokenVerify(data);
    console.log(userToken, 'usertoken');
    if (typeof userToken === 'string') {
      throw new CustomError(401, 'Invalid Token');
    }

    const authenticatedUser = await this.userRepository.findByEmail(
      userToken.email,
    );
    console.log(authenticatedUser, 'authenticatedUser');
    if (!authenticatedUser) throw new CustomError(401, 'Invalid Token');
    return authenticatedUser.role;
  }
}
