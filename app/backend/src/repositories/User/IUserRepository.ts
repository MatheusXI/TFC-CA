import { User } from '../../entites/User';

export default interface IUserRepository {
  findByEmail(email: string): Promise<any>;
  createUser(user: User): Promise<void>;
}
