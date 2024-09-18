import { PrismaClient } from "@prisma/client";

export default class DatabaseService {
  constructor(readonly connection: PrismaClient) {}

  listDoctor() {
    //logica de acesso ao banco de dados
    return this.connection.doctor.findMany();
  }

  getDoctorById(id: number, INCLUDE_AGENDA: boolean) {
    return this.connection.doctor.findUnique({
      where: { id },
      include: {
        agenda: INCLUDE_AGENDA,
      },
    });
  }

  //PATIENT
  getPatientByPhone(phone: string, INCLUDE_APPOINTMENT: boolean) {
    return this.connection.patient.findUnique({
      where: { phone },
      include: {
        appointement: INCLUDE_APPOINTMENT,
      },
    });
  }
}

export const database = new DatabaseService(new PrismaClient());
