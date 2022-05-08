enum JoiTypes {
  ANY_REQUIRED = 'any.required',
  STRING_BASE = 'string.base',
  STRING_EMAIL = 'string.email',
  STRING_MIN = 'string.min',
}

export default class ErroType {
  constructor(private _erro: any) {
    this.verifyErrorType(_erro);
  }

  public get erro() {
    return this._erro;
  }

  private handleUnknown() {
    const message = 'Internal server Error';
    this.defineError(500, message);
  }

  private handleJoi() {
    const { type, message } = this._erro.details[0];

    if (type === JoiTypes.ANY_REQUIRED) {
      this.defineError(400, message);
    } else {
      this.defineError(401, message);
    }
  }

  private handleMessage() {
    const { code, message } = this._erro;
    this.defineError(code || 400, message);
  }

  private defineError(code: number, message: string) {
    this._erro.code = code;
    this._erro.message = message;
  }

  private verifyErrorType(err: any) {
    if (err.isJoi) return this.handleJoi();
    if (err.message) return this.handleMessage();
    return this.handleUnknown();
  }
}
