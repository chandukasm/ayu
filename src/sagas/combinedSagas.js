import { all } from "redux-saga/effects";
import { AyuSagas } from ".";

export default function* rootSaga() {
  yield all([...AyuSagas]);
}
