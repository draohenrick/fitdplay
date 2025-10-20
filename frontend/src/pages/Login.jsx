// frontend/src/pages/Login.jsx
import React from "react";

const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Senha:</label>
        <input type="password" name="password" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
