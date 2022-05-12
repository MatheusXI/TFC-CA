import TokenRepository from '../../../repositories/Token/TokenRepository';
import UserRepository from '../../../repositories/User/UserRepository';
import LoginValidateController from './loginValidateController';
import LoginValidateUseCase from './loginValidateUsecase';

const userRepository = new UserRepository();
const tokenRepository = new TokenRepository(userRepository);

const loginValidateUseCase = new LoginValidateUseCase(tokenRepository);

const loginValidateController = new LoginValidateController(loginValidateUseCase);

export default loginValidateController;
