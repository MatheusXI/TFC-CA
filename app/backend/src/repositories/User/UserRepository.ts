import { IUser } from '../../entites/User';
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

    if (!user) {
      return user;
    }
    return user;
  }

  async createUser(user: IUser) {
    await this.userModel.create(user);
  }
}
