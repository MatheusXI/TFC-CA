import UserModel from '../../database/models/UsersModel';
import loginDTO from '../../useCases/Users/Login/loginDTO';
import ILoginRepository from './ILoginRepository';
import hashVerify from '../../auxFunc/hash/hashVerify';

export default class LoginRepository implements ILoginRepository {
  private userModel;

  constructor() {
    this.userModel = UserModel;
  }

  async loginResponse(login: loginDTO) {
    const user = await this.userModel.findOne({
      where: { email: login.email },
      attributes: { exclude: ['password'] },
    });
    return user;
  }

  async validateLogin(login: loginDTO): Promise<boolean> {
    const user = await this.userModel.findOne({
      where: { email: login.email },
    });
    if (user === null) return false;
    const hashData = await hashVerify(login.password, user);
    return hashData;
  }
}
