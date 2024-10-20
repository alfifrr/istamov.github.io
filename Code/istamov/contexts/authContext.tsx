"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";

interface User {
  username: string;
  password: string;
  sessionId: string | null;
}

// using these properties with useAuth hook
interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    }
  }, []);

  const askUserPermission = async (username: string) => {
    const domain = "http://localhost:3000";
    try {
      const getRequestToken = await api.get("/3/authentication/token/new");
      const response = await getRequestToken.data;
      const askUserPermissionUrl = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=${domain}/approved?username=${username}`;
      window.open(askUserPermissionUrl, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    const localStorageUserDb = localStorage.getItem("userdb");
    let userDb: User[] = localStorageUserDb
      ? JSON.parse(localStorageUserDb)
      : [];

    const existingUser = userDb.find((user) => user.username === username);
    if (!existingUser) {
      await askUserPermission(username);

      const newUser = { username, password, sessionId: null };
      userDb.push(newUser);
      localStorage.setItem("userdb", JSON.stringify(userDb));
      setUser(newUser);
      // localStorage.setItem("user", JSON.stringify(newUser));
      return true;
    } else {
      return false;
    }
  };

  const login = (username: string, password: string): boolean => {
    const localStorageUserDb = localStorage.getItem("userdb");
    let userDb: User[] = localStorageUserDb
      ? JSON.parse(localStorageUserDb)
      : [];

    const existingUser = userDb.find((user) => user.username === username);
    if (existingUser && existingUser.password === password) {
      if (!existingUser.sessionId) {
        askUserPermission(username);
      }

      setUser(existingUser);
      localStorage.setItem("user", JSON.stringify(existingUser));
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.reload();
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
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
