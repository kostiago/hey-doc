import { NextFunction, Request, Response } from "express";
import { HttpStatusCode } from "./httpStatusCode";
import { BussinesError, NotFoundError, UnauthorizadError } from "./Errors";

export const errorHandling = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;

  if (error instanceof NotFoundError) statusCode = HttpStatusCode.NOT_FOUND;
  if (error instanceof UnauthorizadError)
    statusCode = HttpStatusCode.UNAUTHORIZED;
  if (error instanceof BussinesError)
    statusCode = HttpStatusCode.UNPROCESSABLE_ENTITY;

  return res.status(statusCode).json(responseErrorFormatter(error));
};

export function responseErrorFormatter(error: Error) {
  return {
    name: error.name,
    message: error.message,
  };
}
