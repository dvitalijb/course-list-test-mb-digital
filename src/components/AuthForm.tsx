import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import type { AppDispatch } from "../store";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;

const AuthForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setError("Невірний формат email");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError("Пароль має бути мін. 6 символів, 1 велика, 1 мала літера, 1 спецсимвол");
      return;
    }

    dispatch(login({ email }));
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "20px auto" }}>
      <h2>Login / Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" style={{ width: "100%", padding: "8px" }}>Увійти</button>
    </form>
  );
};

export default AuthForm;
