import { useLocalStorage } from "@uidotdev/usehooks";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3042/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      const decodedToken = jwtDecode(data.data.token);
      setUser(decodedToken);
      setToken(data.data.token);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      navigate("/backoffice");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const isAuthenticated = () => {
    return !!user && !!token;
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
    error,
    isLoading,
  };
};

export default useAuth;
