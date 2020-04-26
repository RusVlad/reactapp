import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const itemsReducer = (state = initialState.itemsReducer, action) => {
  switch (action.type) {
    case types.GET_ITEMS_SUCCESS:
      return { ...state, items: action.items };
    default:
      return state;
  }
};

export default itemsReducer;
