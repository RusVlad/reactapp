import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const userReducer = (state = initialState.userReducer, action) => {
  switch (action.type) {
    case types.SET_USER_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default userReducer;
