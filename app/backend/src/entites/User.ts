export interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export default class User {
  public id?: number;

  public username: string;

  public role: string;

  public email: string;

  public password: string;

  constructor(user: IUser) {
    this.username = user.username;
    this.email = user.email;
    this.role = user.role;
    this.password = user.password;
  }
}
