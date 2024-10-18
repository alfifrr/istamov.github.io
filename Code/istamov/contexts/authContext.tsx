"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  username: string;
  password: string;
}

// using these properties with useAuth hook
interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    const localStorageUserDb = localStorage.getItem("userdb");
    let userDb: User[] = localStorageUserDb
      ? JSON.parse(localStorageUserDb)
      : [];

    const existingUser = userDb.find((user) => user.username === username);
    if (existingUser) {
      if (existingUser.password === password) {
        setUser(existingUser);
        localStorage.setItem("user", JSON.stringify(existingUser));
        return true;
      } else {
        return false;
      }
    } else {
      const newUser = { username, password };
      userDb.push(newUser);
      localStorage.setItem("userdb", JSON.stringify(userDb));
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      return true;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
