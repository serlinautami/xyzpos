import actionTypes from "../actionTypes";

/**
 * @name setModalRegistration
 * @description function / action untuk modal registration
 */
export const setModalRegistration = (value) => ({
  type: actionTypes.modal.SET_MODAL_REGISTER,
  value,
});
