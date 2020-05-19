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
    <div className="login-component">
      <header>
        <span>Logged</span>
        <button onClick={handleCancel}>Voltar</button>
      </header>
    </div>
  );
}
