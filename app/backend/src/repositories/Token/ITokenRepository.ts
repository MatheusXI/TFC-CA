import { JwtPayload } from 'jsonwebtoken';
import Users from '../../database/models/UsersModel';
import ILoginDTO from '../../useCases/Users/Login/loginDTO';

export default interface ITokenRepository {
  tokenGenerate(data: ILoginDTO): Promise<string>;
  tokenVerify(token: string): Promise<string | JwtPayload>;
  tokenAuthenticate(data: JwtPayload): Promise<boolean | Users>;
  userAuthenticate(token:string): Promise<Users>
}
