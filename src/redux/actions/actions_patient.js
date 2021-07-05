import * as types from "../types";

export function getAllPatients(payload) {
  return {
    type: types.GET_ALL_PATIENTS,
    payload,
  };
}

export function getPatientRecords(payload) {
  return {
    type: types.GET_PATIENT_RECORDS,
    payload,
  };
}
