import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
  }

  async function handleCancel() {
    history.push('/');
  }

  return (
    <div className="login-component">
      <header>
        <span></span>
        <ul className="nav-bar">
          <li>
            <Link className="singup-link" to="/singup">
              Cadastre-se
            </Link>
          </li>
          <li>
            <Link className="home-link" to="/">
              Voltar a Home
            </Link>
          </li>
        </ul>
      </header>
      <div className="login-container">
        <section className="square-container">
          <form onSubmit={handleLogin}>
            <h1>Acessar minha conta</h1>
            <div className="email-input">
              <label>
                {'Email'}
                <input
                  maxLength="30"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <div className="password-input">
              <label>
                {'Senha'}
                <input
                  maxLength="12"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <button type="submit">Entrar</button>
          </form>
        </section>
      </div>
    </div>
  );
}
