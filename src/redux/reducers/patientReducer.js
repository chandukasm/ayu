import * as types from "../types";

const initialState = {
  all: [],
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_PATIENTS_SUCCESS:
      return {
        ...state,
        all: [...action.payload],
      };

    default:
      return state;
  }
};

export default patientReducer;
