import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProtectedComponent from "./Components/ProtectedComponent";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
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
