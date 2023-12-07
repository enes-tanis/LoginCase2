import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  const isTokenValid = async () => {
    if (token) {
      try {
        const response = await axios.post(
          "https://localhost:7105/api/auth/authentication",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        return response.status === 200;
      } catch (error) {
        console.error("Token validation failed", error);
        return false;
      }
    }

    return false;
  };

  return isTokenValid() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
