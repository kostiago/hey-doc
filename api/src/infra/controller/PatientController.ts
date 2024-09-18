import PatientController from "@/application/controller/PatientController";
import { Request, Response } from "express";
import { database } from "@/infra/DatabaseService";
import CreatePatientUseCase from "@/application/useCases/patient/CreatePatient";
import CreateAppointmentUseCase from "@/application/useCases/patient/CreateAppointment";
import AuthenticatePatientUseCase from "@/application/useCases/patient/AuthenticatePatient";

export default class PatientControllerImpl implements PatientController {
  async createPatient(req: Request, res: Response) {
    const { name, phone, password } = req.body;
    const useCase = new CreatePatientUseCase(database);
    const patient = await useCase.execute(name, phone, password);

    res.status(201).json(patient);
  }
  async createAppointment(req: Request, res: Response) {
    const { agendaId } = req.body;
    const { patientId } = req.params;

    const useCase = new CreateAppointmentUseCase(database);
    const appointement = await useCase.execute(
      Number(patientId),
      Number(agendaId)
    );

    res.status(201).json(appointement);
  }

  async authenticate(req: Request, res: Response) {
    const { phone, password } = req.body;
    const useCase = new AuthenticatePatientUseCase(database);
    const patient = await useCase.execute(phone, password);

    res.status(200).json(patient);
  }
}
