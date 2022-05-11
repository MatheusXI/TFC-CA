import { JwtPayload } from 'jsonwebtoken';
import ILoginDTO from '../../useCases/Users/Login/loginDTO';

export default interface ITokenRepository {
  tokenGenerate(data: ILoginDTO): Promise<string>;
  tokenVerify(token: string): Promise<string | JwtPayload>;
}
