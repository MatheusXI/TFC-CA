import UserRepository from '../../repositories/UserRepository';
import CreateUserUseCase from './createUserUseCase';
import CreateUserController from './createUserController';

const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);

export default createUserController;
