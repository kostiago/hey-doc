import * as joi from "joi";

export const authenticationSchema = joi.object({
  phone: joi.string().required(),
  password: joi.string().required(),
});

export const createAppointmentAgendaIdSchema = joi.object({
  agendaId: joi.number().required(),
});

export const createPatientIdSchema = joi.object({
  patientId: joi.number().required(),
});

export const getDoctorByIdSchema = joi.object({
  id: joi.number().required(),
});

export const getPatientPhoneSchema = joi.object({
  phone: joi.string().required(),
});
