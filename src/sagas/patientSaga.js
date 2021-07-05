import { call, put } from "redux-saga/effects";
import { api_getAllPatients } from "../api/apiCalls";
import * as types from "../redux/types";

export function* get_all_patients_saga() {
  let response = {};

  try {
    response = yield call(api_getAllPatients);
    if (response.status == 200) {
      yield put({
        type: types.GET_ALL_PATIENTS_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    alert(error);
  }
}
