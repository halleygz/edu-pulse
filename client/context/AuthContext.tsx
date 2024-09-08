'use client'
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface AuthUser {
  id: string;
  name: string;
  email: string;
  // Add more fields as needed based on the shape of your auth user data
}

interface AuthContextType {
  authUser: AuthUser | null;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      const storedUser = JSON.parse(localStorage.getItem('authUser') || 'null');
      if (storedUser) {
        setAuthUser(storedUser)
        setIsAuthenticated(true)
      }
    }
  },[])

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
