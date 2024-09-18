import Router from "@/infra/Router";
import DoctorControllerImpl from "@/infra/controller/DoctorController";
import PatientControllerImpl from "@/infra/controller/PatientController";

const doctorController = new DoctorControllerImpl();
const patientController = new PatientControllerImpl();

const app = new Router(doctorController, patientController);

export default app;
