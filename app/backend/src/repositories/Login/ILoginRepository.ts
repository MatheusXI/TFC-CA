import { Model } from 'sequelize';
import ILoginDTO from '../../useCases/Users/Login/loginDTO';

export default interface ILoginRepository {
  validateLogin(login: ILoginDTO):Promise<boolean>
  loginResponse(user: ILoginDTO): Promise<Model<any, any> | null>
}
