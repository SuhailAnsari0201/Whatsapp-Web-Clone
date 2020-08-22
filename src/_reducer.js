export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  USER_LOADED: "USER_LOADED",
  AUTH_ERROR: "AUTH_ERROR",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.USER_LOADED:
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
