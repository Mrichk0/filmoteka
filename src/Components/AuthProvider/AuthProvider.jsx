import React, { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

const AUTH = "isAuth";

const initialState = {
  isAuth: localStorage.getItem(AUTH)
    ? JSON.parse(localStorage.getItem(AUTH))
    : false,
};

const reducer = (state, actions) => {
  switch (actions.type) {
    case "IS_LOGIN":
      localStorage.setItem(AUTH, "true");
      return {
        ...state,
        isAuth: true,
      };

    case "IS_LOGOUT":
      localStorage.setItem(AUTH, "false");
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default function AuthProvider({ children }) {
  const [{ isAuth }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(AUTH, isAuth ? "true" : "false");
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
