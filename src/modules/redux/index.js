import { createStore, combineReducers } from "redux";
import actionTypes from "./actionTypes";
import loading from "./loading/reducer";
import profile from "./profile/reducer";
import modal from "./modal/reducer";

// satukan semua reducer menjadi satu dengan comnbineReducer
const reducer = combineReducers({
  modal,
  loading,
  profile,
});

// inititate store untuk redux dengan createStore
export const store = createStore(reducer);

export { actionTypes };

export * from "./loading/action";
export * from "./profile/action";
export * from "./modal/action";
