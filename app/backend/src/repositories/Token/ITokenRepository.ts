import { JwtPayload } from 'jsonwebtoken';
import ILoginDTO from '../../useCases/Login/loginDTO';

export default interface ITokenRepository {
  tokenGenerate(data: ILoginDTO): Promise<string>;
  tokenVerify(token: string): Promise<string | JwtPayload>;
}
