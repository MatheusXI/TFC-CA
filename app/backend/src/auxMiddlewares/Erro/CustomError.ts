class CustomError extends Error {
  code: number;

  message: string;

  isJoi?: boolean;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

export default CustomError;
