import { act } from "react-dom/test-utils";
import actionTypes from "../actionTypes";

const initialState = {
  modalRegister: {
    show: false,
    formType: "LOGIN",
  },
};

/**
 * @name modal
 * @description reducer untuk modal
 */
const modal = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.modal.SET_MODAL_REGISTER:
      return {
        ...state,
        modalRegister: {
          ...state.modalRegister,
          ...action.value,
        },
      };
    default:
      return state;
  }
};

export default modal;
