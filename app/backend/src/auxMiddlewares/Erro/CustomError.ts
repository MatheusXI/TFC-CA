class CustomError extends Error {
  status: number;

  message: string;

  isJoi?: boolean;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default CustomError;
