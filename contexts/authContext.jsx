import { createContext, useEffect, useContext, useState } from "react";
import api from "../helper/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, []);

  // Helper: handle login/register success
  const handleAuthSuccess = (data) => {
    // Your backend returns: { _id, username, email, token }
    // Extract token and separate user data
    const { token, ...userData } = data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    updateUser(userData);
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
      value={{ user, setUser: updateUser, signUp, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
