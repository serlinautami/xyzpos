import actionTypes from "../actionTypes";

/**
 * @name setLoading
 * @description
 * function / action untuk merubah data reducer
 * loading, lebih tepatnya untuk toggle juga
 */
export const setLoading = (value) => ({
  type: actionTypes.loading.SET_LOADING,
  value,
});
