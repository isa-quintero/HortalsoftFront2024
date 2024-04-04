import React, { useState } from "react";
import "./Login.scss";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="app-container">
    <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label" htmlFor="username">Usuario</label>
          <input
            className="login-input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="login-label" htmlFor="password">Contraseña</label>
          <input
            className="login-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

