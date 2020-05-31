import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Recover() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginUpdate(e) {
    e.preventDefault();

    const data = {
      userID,
      password,
    };
    try {
      const response = await api.put('/login', data);

      console.log(response);
      alert('Sua senha foi alterada!');
      window.location.reload(false);
    } catch (error) {
      console.log('Deu a exceção?');
      alert('Não encontramos este Id. Por favor insira um id válido!');
    }
  }

  return (
    <div className="recover-component">
      <header>
        <span></span>
        <ul className="nav-bar">
          <li>
            <Link className="login-link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="home-link" to="/">
              Voltar a Home
            </Link>
          </li>
        </ul>
      </header>
      <div className="recover-container">
        <section className="square-container">
          <form onSubmit={handleLoginUpdate}>
            <h1>Recuperar sua senha</h1>
            <div className="id-input">
              <label>
                {'Seu Id'}
                <input
                  maxLength="20"
                  value={userID}
                  type="text"
                  onChange={(e) => setUserID(e.target.value)}
                />
              </label>
            </div>

            <div className="password-input">
              <label>
                {'Sua nova Senha'}
                <input
                  maxLength="12"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <button type="submit">Alterar</button>
          </form>
        </section>
      </div>
    </div>
  );
}
