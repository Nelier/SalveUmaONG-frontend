import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Login() {
  const [idUser, setIdUser] = useState('');
  const history = useHistory();
  const localtest = localStorage.getItem('id_user');

  useEffect(() => {
    if (localtest != null) {
      setIdUser(localtest);
    } else {
      alert('Você não tem permissão para acessar esta página!');
      history.push('/');
    }
  }, [idUser]);

  function clearStorage() {
    localStorage.removeItem('id_user');
  }

  if (idUser == '') {
    return <h1>Error! Can't acess page requested!</h1>;
  }

  return (
    <div className="edit-component">
      <header>
        <span></span>
        <ul className="nav-bar">
          <li>
            <Link
              className="singup-link"
              to="/login"
              onClick={() => clearStorage()}
            >
              Logout
            </Link>
          </li>
          <li>
            <Link className="home-link" to="/" onClick={() => clearStorage()}>
              Voltar a Home
            </Link>
          </li>
        </ul>
      </header>
      <div className="edit-container">
        <h1>Testando Profile Edit</h1>
        <h2></h2>
      </div>
    </div>
  );
}
