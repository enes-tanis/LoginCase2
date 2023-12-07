import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProtectedComponent from "./Components/ProtectedComponent";

const RedirectToLogin = () => {
  // You can add additional logic here if needed
  return <Navigate to="/login" />;
};

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectToLogin />} />

        <Route path="/login" element={<Login setToken={setToken} />} />

        <Route
          path="/protected"
          element={
            <ProtectedRoute token={token}>
              <ProtectedComponent />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
