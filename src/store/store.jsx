import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

// Create context
let AppContext = createContext();

// Provider
let initialState = {
  loading: false, 
  loginUser: null,
};

let AppProvider = ({ children }) => {

  let [state, dispatch] = useReducer(reducer, initialState);

 

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
