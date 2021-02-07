import { combineReducers } from "redux";
import patients from "./patientReducer";
import drugs from "./drugReducer";

export default combineReducers({
  patients,
  drugs,
});
