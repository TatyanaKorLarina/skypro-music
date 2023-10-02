import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

export const WithAuth = ({ children }) => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  // function which will record data (login)
  const login = (authData) => {
    setAuth(authData);
    localStorage.setItem("user", JSON.stringify(authData));
    navigate("/");
  };

  // function which will delete data (logout)
  const logout = () => {
    setAuth(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  // put data in provider
  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export Context
export const useAuth = () => {
  return useContext(AuthContext);
};