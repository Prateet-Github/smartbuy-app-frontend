import { createContext, useEffect, useContext, useState } from "react";
import api from "../helper/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Safe JSON parse
  const safeParse = (value) => {
    try {
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  };

  // Update user + localStorage sync
  const updateUser = (newUser) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
  };

  // Load user on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = safeParse(localStorage.getItem("user"));
    if (token && storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Helper: handle login/register success
  const handleAuthSuccess = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    updateUser(data.user);
  };

  const signUp = async (username, email, password) => {
    try {
      const { data } = await api.post("/users/register", {
        username,
        email,
        password,
      });
      handleAuthSuccess(data);
    } catch (error) {
      throw new Error(error.response?.data?.message || "Sign-up failed");
    }
  };

  const signIn = async (email, password) => {
    try {
      const { data } = await api.post("/users/login", { email, password });
      handleAuthSuccess(data);
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser: updateUser, signUp, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
