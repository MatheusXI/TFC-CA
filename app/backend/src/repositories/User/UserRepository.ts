import { User } from '../../entites/User';
import UserModel from '../../database/models/UsersModel';
import IUserRepository from './IUserRepository';

export default class UserRepository implements IUserRepository {
  private userModel;

  constructor() {
    this.userModel = UserModel;
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
    });

    if (user === null) return user;
    return user;
  }

  async createUser(user: User) {
    await this.userModel.create(user);
  }
}
