/**
 * ACTION TYPES PADA REDUCER
 * adalah constant untuk mencegah terjadi kesalah penulisan
 * ketika kita akan memakan dispatch / action dispatcher
 * di Redux.
 */

// action type untuk loading
const loading = {
  SET_LOADING: "SET_LOADING",
};

// action type untuk profile
const profile = {
  SET_PROFILE: "SET_PROFILE",
  CLEAR_PROFILE: "CLEAR_PROFILE",
};

// action type untuk modal
const modal = {
  SET_MODAL_REGISTER: "SET_MODAL_REGISTER",
};

const actionTypes = {
  profile,
  loading,
  modal,
};

export default actionTypes;
