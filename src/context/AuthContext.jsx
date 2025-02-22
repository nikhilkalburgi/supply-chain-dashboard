import React, { createContext, useContext, useState } from "react";

// Create context with proper typing
const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
    <AuthContext.Provider value={[ isAuthenticated, setIsAuthenticated ]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
};
