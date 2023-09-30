import React, { useContext } from "react";

export const UserContext = React.createContext({});

export const useUserContext = () => {
  const userName = useContext(UserContext);
  console.log (userName);
};

