import actionTypes from "../actionTypes";

const initialState = null;

/**
 * @name profile
 * @description reducer untuk profile
 */
const profile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.profile.SET_PROFILE:
      return {
        ...state,
        ...action.value,
      };
    default:
      return state;
  }
};

export default profile;
