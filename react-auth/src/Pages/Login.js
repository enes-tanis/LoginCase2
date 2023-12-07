import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7105/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token } = response.data;
      setToken(token);

      localStorage.setItem("token", token);

      navigate("/protected");
    } catch (error) {
      console.error("Login failed", error);
      setError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <main className="form-signin d-flex align-items-center justify-content-center vh-100">
      <form className="w-50 mx-auto">
        {error && <p className="text-danger">!! Hatalı Giriş</p>}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">E-Posta</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Şifre</label>
        </div>

        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          onClick={handleLogin}
        >
          Giriş
        </button>

        <button
          className="btn btn-danger w-100 py-2 mt-2"
          onClick={handleLogout}
        >
          Çıkış Yap
        </button>
      </form>
    </main>
  );
};

export default Login;
