import Router from "@/infra/Router";
import DoctorControllerImpl from "@/infra/controller/DoctorController";

const doctorController = new DoctorControllerImpl();

const app = new Router(doctorController);

export default app;
