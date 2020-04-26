import { combineReducers } from "redux";
import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import confirmationModalReducer from "./confirmationModalReducer";

const rootReducer = combineReducers({
  userReducer,
  itemsReducer,
  confirmationModalReducer,
});

export default rootReducer;
