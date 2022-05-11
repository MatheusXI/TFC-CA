import CustomError from '../../auxMiddlewares/Erro/CustomError';
import hashGenerate from '../../auxFunc/hash/hashGenerate';
import { User } from '../../entites/User';
import IUserRepository from '../../repositories/User/IUserRepository';
import ICreateUserRequestDTO from './createUserDTO';

export default class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new CustomError(404, 'User already exists.');
    }

    const hashPassword = await hashGenerate(data.password);
    const newUser = { ...data, password: hashPassword };

    const user = new User(newUser);

    await this.userRepository.createUser(user);
  }
}
