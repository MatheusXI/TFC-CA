import * as bcrypt from 'bcryptjs';
/* import { User } from '../../entites/User';
 */

const hashVerify = async (password: string, user: any): Promise<boolean> => {
  const decoded = await bcrypt.compare(password, user.password);
  return decoded;
};
export default hashVerify;
