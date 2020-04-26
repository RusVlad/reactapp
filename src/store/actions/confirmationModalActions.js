import * as types from "./actionTypes";

export const setIsOpen = (isOpen) => {
  return { type: types.SET_CONFIRMATION_MODAL_IS_OPEN, isOpen };
};

export const callConfirmationFunction = () => {
  return (dispatch, getState) => {
    const state = getState();
    state.confirmationModalReducer.confirmationFunction();
  };
};

export const setConfirmationFunction = (confirmationFunction) => {
  return { type: types.SET_CONFIRMATION_FUNCTION, confirmationFunction };
};
