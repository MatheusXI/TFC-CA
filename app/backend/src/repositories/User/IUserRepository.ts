import { User } from '../../entites/User';

export default interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  createUser(user: User): Promise<void>;
}
