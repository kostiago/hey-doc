import DatabaseService from "@/infra/DatabaseService";
import { NotFoundError } from "@/infra/helpers/Errors";

export default class GetPatientByPhoneUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(phone: string) {
    //logica de negocio
    const INCLUDE_APPOINTMENT = true;
    const INCLUDE_DOCTOR = true;
    const patient = await this.database.getPatientByPhone(
      phone,
      INCLUDE_APPOINTMENT,
      INCLUDE_DOCTOR
    );

    if (!patient) {
      throw new NotFoundError("Patient not found");
    }

    return patient;
  }
}
