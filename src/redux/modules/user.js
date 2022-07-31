const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

const initialState = {
  isLogin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { isLogin: true };
    case LOGOUT:
      return { isLogin: false };
    default:
      return state;
  }
};

export default reducer;
