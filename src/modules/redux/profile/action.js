import actionTypes from "../actionTypes";

/**
 * @name setProfile
 * @description
 * function atau action untuk melakukan
 * penyimpanan data ke reducer profile
 * @param {*} value
 */
export const setProfile = (value) => ({
  type: actionTypes.profile.SET_PROFILE,
  value,
});

/**
 * @name clearProfile
 * @description
 * function atau action untuk melakukan
 * penghapusan data reducer profile
 */
export const clearProfile = () => ({
  type: actionTypes.profile.CLEAR_PROFILE,
});
