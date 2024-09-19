import { NextFunction, Request, Response } from "express";
import { func, ObjectSchema } from "joi";
import { BadRequestError } from "./helpers/Errors";
import { HttpStatusCode } from "./helpers/httpStatusCode";
import { responseErrorFormatter } from "./helpers/ErrorHandling";
import { decodeToBase64 } from "./helpers/SecurityHelpers";

//validar requisição
function validatePayload(schema: ObjectSchema, key: "body" | "params") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[key]);

    if (error) {
      const message = "Invalid payload";

      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ message, error: error.message });
    }
    next();
  };
}

//validar o body da requisição
export function validateBody(schema: ObjectSchema) {
  return validatePayload(schema, "body");
}

//validar os parâmetro da requisição
export function validateParams(schema: ObjectSchema) {
  return validatePayload(schema, "params");
}

//validar se o token de autenticação foi enviado
export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.headers.authorization) {
    const message = new BadRequestError("Missing authorization header");

    return res
      .status(HttpStatusCode.UNAUTHORIZED)
      .json(responseErrorFormatter(message));
  }

  const token = req.headers.authorization.split(" ")[1];
  const user: any = decodeToBase64(token);

  if (!user) {
    const message = new BadRequestError("Invalid token");

    return res
      .status(HttpStatusCode.UNAUTHORIZED)
      .json(responseErrorFormatter(message));
  }

  next();
}
