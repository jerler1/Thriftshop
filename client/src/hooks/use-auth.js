// Inspired by https://usehooks.com/useAuth/
import React, { useState, useContext, createContext } from "react";
import api from "../api";
import jwt from "jsonwebtoken";

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
      jwt.verify(data.token, process.env.REACT_APP_SECRET,
        (err, decoded) => {
          if (err) {
            console.log(err);
            throw err;
          } else {
            setUser(decoded);
          }
        })
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
