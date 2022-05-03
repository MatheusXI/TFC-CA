import { User } from '../entites/User';
import UserModel from '../database/models/UsersModel';
import IUserRepository from './IUserRepository';

export default class UserRepository implements IUserRepository {
  private userModel;

  constructor() {
    this.userModel = UserModel;
  }

  async findByEmail(email: string): Promise<any> {
    const user = await this.userModel.findOne({
      where: { email },
    });
    if (!user) throw new Error('User not found');
    console.log(user, 'user findByemail');
    return user;
  }

  async createUser(user: User): Promise<void> {
    await this.userModel.create(user);
  }
}
