import React from "react";
import { useContext } from "react";

const UserContext = React.createContext();

export const useUserContext = () => useContext(UserContext);

const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <UserContext.Provider value={React.useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  );
};

export default StateProvider;
