import * as types from "./actionTypes";

export const setUserToken = (token) => {
  return { type: types.SET_USER_TOKEN, token };
};
