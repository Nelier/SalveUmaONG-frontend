import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Register() {
  async function handleRegister() {
    return null;
  }

  return (
    <div className="register-component">
      <header>
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
      <div className="register-container">
        <h1>Cadastre-se</h1>
      </div>
    </div>
  );
}
