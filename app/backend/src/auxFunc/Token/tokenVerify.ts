import * as jwt from 'jsonwebtoken';
import * as fs from 'fs/promises';

const tokenVerify = async (token: string) => {
  const secret = await fs.readFile('jwt.evaluation.key');
  const verify = jwt.verify(token, secret);
  return verify;
};
export default tokenVerify;
