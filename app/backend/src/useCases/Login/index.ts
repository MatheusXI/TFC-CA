import LoginRepository from '../../repositories/Login/LoginRepository';
import TokenRepository from '../../repositories/Token/TokenRepository';
import LoginUseCase from './loginUseCase';
import LoginController from './loginController';

const loginRepository = new LoginRepository();
const tokenRepository = new TokenRepository();
const loginUseCase = new LoginUseCase(loginRepository, tokenRepository);
const loginController = new LoginController(loginUseCase);

export default loginController;
