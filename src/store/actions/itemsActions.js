import * as types from "./actionTypes";
import RequestProvider from "../../providers/requests";

/**
 *
 * @param {Array} items Array of item objects
 */
export const setItems = (items) => {
  return { type: types.GET_ITEMS_SUCCESS, items };
};

export const getItems = () => {
  return (dispatch) => {
    RequestProvider.get("/items").then((res) => {
      dispatch(setItems(res));
    });
  };
};

/**
 *
 * @param {Object} payload New item to be created
 */
export const createItem = (payload) => {
  return (dispatch) => {
    return RequestProvider.post(`/items`, payload).then((res) => {
      if (res.error) {
        return res;
      } else {
        dispatch(getItems());
        return res;
      }
    });
  };
};

/**
 *
 * @param {string} payload Id of item to delete
 */
export const deleteItem = (payload) => {
  return (dispatch) => {
    RequestProvider.delete(`/items/${payload}`).then(() => {
      dispatch(getItems());
    });
  };
};

/**
 *
 * @param {Object} payload Item to edit
 */
export const editItem = (payload) => {
  return (dispatch, getState) => {
    return RequestProvider.put(`/items/${payload._id}`, payload).then((res) => {
      if (res.error) {
        return res;
      } else {
        let state = getState();
        let itemsArr = state.itemsReducer.items.map((item) => {
          if (item._id === res._id) {
            return res;
          } else {
            return item;
          }
        });
        dispatch(setItems(itemsArr));
        return res;
      }
    });
  };
};
