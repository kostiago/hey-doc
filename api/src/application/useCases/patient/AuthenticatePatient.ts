import DatabaseService from "@/infra/DatabaseService";
import { BussinesError, NotFoundError } from "@/infra/helpers/Errors";
import {
  comparePassword,
  encondeToBase64,
} from "@/infra/helpers/SecurityHelpers";

export default class AuthenticatePatientUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(phone: string, password: string) {
    const user = await this.database.getUserByPhone(phone);

    if (!user) {
      throw new NotFoundError("Patient not found");
    }

    const isPasswordValid = comparePassword(password, user.password);

    if (!isPasswordValid) {
      throw new BussinesError("Phone or Password is invalid");
    }

    const payload = {
      user: {
        id: user.id,
        phone: user.phone,
      },
    };

    return {
      token: encondeToBase64(JSON.stringify(payload)),
    };
  }
}
