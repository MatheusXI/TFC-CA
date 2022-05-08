import ITokenRepository from '../../repositories/Token/ITokenRepository';
import ILoginDTO from './loginDTO';
import ILoginRepository from '../../repositories/Login/ILoginRepository';

export default class LoginUseCase {
  constructor(
    private loginRepository: ILoginRepository,
    private tokenRepository: ITokenRepository,
  ) {}

  async execute(data: ILoginDTO) {
    const userExists = await this.loginRepository.validateLogin(data);
    console.log(userExists, 'loginUseCase');

    if (!userExists) {
      throw new Error('User not found');
    }
    const user = await this.loginRepository.loginResponse(data);
    const token = await this.tokenRepository.tokenGenerate(data);
    const response = { user, token };
    return response;
  }
}
