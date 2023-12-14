import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token,setToken] = useState(localStorage.getItem('token'));

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  //tackling the logout functionality
  let isLoggedIn = !!token;
  
  const LogoutUser = () =>{
    setToken("");
    return localStorage.removeItem("token");
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn,storeTokenInLS ,LogoutUser}}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
