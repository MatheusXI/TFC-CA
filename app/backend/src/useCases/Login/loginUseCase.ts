import ITokenRepository from '../../repositories/Token/ITokenRepository';
import ILoginDTO from './loginDTO';
import ILoginRepository from '../../repositories/Login/ILoginRepository';
import CustomError from '../../auxMiddlewares/Erro/CustomError';

export default class LoginUseCase {
  constructor(
    private loginRepository: ILoginRepository,
    private tokenRepository: ITokenRepository,
  ) {}

  async execute(data: ILoginDTO) {
    const userExists = await this.loginRepository.validateLogin(data);

    if (!userExists) {
      throw new CustomError(401, 'Incorrect email or password');
    }
    const user = await this.loginRepository.loginResponse(data);
    const token = await this.tokenRepository.tokenGenerate(data);
    const response = { user, token };
    return response;
  }
}
