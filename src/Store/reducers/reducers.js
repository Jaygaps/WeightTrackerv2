import { combineReducers } from "redux";
import { ActionTypes } from "../actions";

const initialState = {
  user: {},
  status: "INITIAL",
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_DATA:
      return { ...state, user: action.userData, status: "SUCCESS" };
    default:
      return state;
  }
};

// export const dataSet = combineReducers({
//   userData,
// });
