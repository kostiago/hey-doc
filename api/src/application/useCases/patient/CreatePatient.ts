import DatabaseService from "@/infra/DatabaseService";
import { hashPassword } from "@/infra/helpers/SecurityHelpers";

export default class CreatePatientUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(name: string, phone: string, password: string) {
    //verifica se o paciente ja existe com o telefone
    const patient = await this.database.getPatientByPhone(phone);

    if (patient) {
      throw new Error("Patient already exists whith this phone number");
    }

    //gera um hash seguro para a senha ser armazenada no banco de dados
    const hashedPassword = hashPassword(password);

    //adiciona um novo usuario com o telefone informado
    const user = await this.database.createUser(phone, hashedPassword);

    //adiciona o paciente com nome, telefone e id de usuario criado
    const newPatient = await this.database.createPatient(name, phone, user.id);

    //retorna o paciente criado
    return newPatient;
  }
}
