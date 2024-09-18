import DatabaseService from "@/infra/DatabaseService";

export default class CreateAppointmentUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(patientId: number, agendaId: number) {
    //verifica se o paciente existe com o id passado
    const patient = await this.database.getPatientById(patientId);
    if (!patient) {
      throw new Error("Patient not found");
    }

    //verifica se a agenda existe com o id passado e está disponivel
    const agenda = await this.database.getAgendaById(agendaId);

    if (!agenda?.available) {
      throw new Error("Agenda not available for this date");
    }

    //atualiza a agenda para não estar mais disponivel
    await this.database.updateAgenda(agenda.id, { available: false });

    //cria um novo agendamento para o paciente com o id passado e a agenda com o id passado
    const appointment = await this.database.createAppointment(
      patient.id,
      agenda.doctorId,
      agenda.date
    );

    //retorna o agendamento criado
    return appointment;
  }
}
