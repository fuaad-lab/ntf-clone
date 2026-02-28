const storedUser = localStorage.getItem("user_auth");

export const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

const AuthReducer = (state, action) => {
  const { type, payload } = action;

  //

  switch (type) {
    case "LOGIN":
      return {
        user: payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
