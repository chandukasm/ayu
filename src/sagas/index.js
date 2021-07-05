import { takeEvery } from "redux-saga/effects";
import * as types from "../redux/types";
import { get_all_patients_saga } from "./patientSaga";

export const AyuSagas = [
  takeEvery(types.GET_ALL_PATIENTS, get_all_patients_saga),
];
