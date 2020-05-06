import * as types from "./actionTypes";
import RequestProvider from "../../providers/requests";

export const setUserToken = (token) => {
  return { type: types.SET_USER_TOKEN, token };
};

export const setUser = (user) => {
  return { type: types.SET_USER, user };
};

export const getUser = (id) => {
  return (dispatch) => {
    RequestProvider.post("/login/user", { id: id }).then((res) => {
      dispatch(setUser(res));
    });
  };
};
