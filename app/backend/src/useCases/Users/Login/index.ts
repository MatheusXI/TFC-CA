import LoginRepository from '../../../repositories/Login/LoginRepository';
import TokenRepository from '../../../repositories/Token/TokenRepository';
import LoginUseCase from './loginUseCase';
import LoginController from './loginController';
import UserRepository from '../../../repositories/User/UserRepository';

const loginRepository = new LoginRepository();
const userRepository = new UserRepository();
const tokenRepository = new TokenRepository(userRepository);

const loginUseCase = new LoginUseCase(loginRepository, tokenRepository);
const loginController = new LoginController(loginUseCase);

export default loginController;
