import UsersModel from '../../database/models/UsersModel';
import User from '../../entites/User';

export default interface IUserRepository {
  findByEmail(email: string): Promise<UsersModel | null>;
  createUser(user: User): Promise<void>;
}
