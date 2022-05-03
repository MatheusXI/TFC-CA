import { User } from '../../entites/User';
import IUserRepository from '../../repositories/IUserRepository';
import ICreateUserRequestDTO from './createUserDTO';

export default class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }
    const user = new User(data);

    await this.userRepository.createUser(user);
  }
}
