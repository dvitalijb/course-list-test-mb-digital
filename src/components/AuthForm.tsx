import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import type { AppDispatch } from "../store";

const EMAILREGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORDREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;

const AuthForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAILREGEX.test(email)) {
      setError("Wrong email");
      return;
    }

    if (!PASSWORDREGEX.test(password)) {
      setError("Password must be at least 6 characters, 1 uppercase letter, 1 lowercase letter, 1 special character");
      return;
    }

    dispatch(login({ email }));
    setError("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Login / Register</h2>
      <input
        className="field"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Log in</button>
    </form>
  );
};

export default AuthForm;
