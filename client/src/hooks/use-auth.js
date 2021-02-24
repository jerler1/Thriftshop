// Inspired by https://usehooks.com/useAuth/
import React, { useState, useContext, createContext } from "react";
import api from "../api";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    return api.login(email, password).then((data) => {
      setUser(data.user);
      return data.user;
    });
  };

  const logout = () => {
    return api.logout().then(() => {
      setUser(false);
    });
  };

  return {
    user,
    login,
    logout,
  };
}
