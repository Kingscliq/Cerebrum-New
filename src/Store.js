/** @format */

// /** @format */

// import React, { createContext, useEffect, useState, useContext } from "react";

// const AuthContext = createContext({});

// const AuthProvider = (props) => {
//   const [isloggedIn, setIsLoggedIn] = useState(false);

//   //  Login Function
//   const login = () => {
//     setIsloggedIn(true);
//   };

//   // Logout Function
//   const logout = () => {
//     setIsloggedIn(false);
//   };

//   // Create
//   const authContextValue = {
//     isloggedIn,
//     setIsloggedIn,
//   };
//   return <AuthContext.Provider value={authContextValue} {...props} />;
// };

// const useAuth = () => useContext(AuthContext);

// export { AuthProvider, useAuth };

import React, { useState, createContext } from "react";

const initialState = {
  name: "Kingsley",
  description: "Knowledge for everyone by everyone",
};

export const Context = createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
