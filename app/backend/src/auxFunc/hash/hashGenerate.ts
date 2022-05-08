import * as bcrypt from 'bcryptjs';

const hashGenerate = async (password: string): Promise<string> => {
  const hash = await bcrypt.hash(password, 5);
  return hash;
};
export default hashGenerate;
