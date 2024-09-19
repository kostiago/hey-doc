export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

export class BadRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BadRequestError";
  }
}

export class BussinesError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BussinesError";
  }
}

export class UnauthorizadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizadError";
  }
}

export class UnprocessableEntityError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnprocessableEntityError";
  }
}
