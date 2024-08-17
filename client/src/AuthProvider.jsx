// src/AuthContext.js
import { createContext, useState, useContext, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// Create a provider component
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Load user from localStorage when the app initializes or refreshes
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false); // Set loading to false once done
  }, []);

  // Function to handle login
  const login = async (email, password) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User data from API:", data);
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        return true;
      } else {
        throw new Error(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
