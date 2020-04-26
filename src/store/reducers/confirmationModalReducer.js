import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const confirmationModalReducer = (
  state = initialState.confirmationModalReducer,
  action
) => {
  switch (action.type) {
    case types.SET_CONFIRMATION_MODAL_IS_OPEN:
      return { ...state, isOpen: action.isOpen };
    case types.SET_CONFIRMATION_FUNCTION:
      return { ...state, confirmationFunction: action.confirmationFunction };
    default:
      return state;
  }
};

export default confirmationModalReducer;
