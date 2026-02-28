import { createContext, useContext, useEffect, useReducer } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import AuthReducer, { initialState } from "./AuthReducer";

const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    if (state.user === null) {
      localStorage.removeItem("user_auth");
    } else {
      localStorage.setItem("user_auth", JSON.stringify(state.user));
    }
  }, [state.user]);

  const login = (user) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = async () => {
    await signOut(auth);        // 🔥 muhiim
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}