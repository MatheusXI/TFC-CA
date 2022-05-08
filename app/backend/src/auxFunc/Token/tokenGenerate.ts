import * as jwt from 'jsonwebtoken';
import * as fs from 'fs/promises';
import ILoginDTO from '../../useCases/Login/loginDTO';

const tokenGenerate = async (payload: ILoginDTO): Promise<string> => {
  const secret = await fs.readFile('jwt.evaluation.key');
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};
export default tokenGenerate;
