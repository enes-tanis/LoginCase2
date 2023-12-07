import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isTokenValid, setIsTokenValid] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const checkTokenValidity = async () => {
      if (!token) {
        setIsTokenValid(false);
        return;
      }

      try {
        const response = await axios.post(
          "https://localhost:7105/api/auth/authentication",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setIsTokenValid(response.status === 200);
        console.log(
          response.status === 200
            ? "Token validation success"
            : "Token validation failed"
        );
      } catch (error) {
        console.error("Token validation failed", error);
        setIsTokenValid(false);
      }
    };

    checkTokenValidity();
  }, [token]);

  if (isTokenValid === null) {
    return null;
  }

  return isTokenValid ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
