import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Login() {
  const [userId, setUserId] = useState('');
  const history = useHistory();

  async function handleLogin() {}

  async function handleCancel() {
    history.push('/');
  }

  return (
    <div className="profile-component">
      <header>
        <ul className="nav-bar">
          <li>
            <Link className="home-link" to="/">
              Voltar a Home
            </Link>
          </li>
        </ul>
      </header>
      <div className="profile-container">
        <h1>Profile</h1>
      </div>
    </div>
  );
}
