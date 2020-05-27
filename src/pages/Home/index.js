/*eslint no-unused-expressions: [
  "error", { 
    "allowShortCircuit": true
  }]*/
import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logged from '../../contexts/isLogged';

import api from '../../services/api';

import './styles.css';

export default function Home() {
  const [ongs, setOngs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    try {
      api.get('singup').then((response) => {
        localStorage.removeItem('id_user');
        setOngs(response.data);
      });
    } catch (error) {
      console.log('Problema ao puxar as ongs' + error);
    }
  });

  async function handleProfile(ongParam) {
    localStorage.setItem('id_ong', ongParam);

    history.push(`/ong`);
  }

  return (
    <div className="home-component">
      <header>
        <span className="bem-vindo">Bem vindo</span>
        <ul className="nav-bar">
          <li>
            <Link className="login-link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="singup-link" to="/singup">
              Cadastre-se
            </Link>
          </li>
          <li>
            <button
              className="ButtonTest"
              onClick={() => {
                return null;
              }}
            >
              Deixar Logado
            </button>
          </li>
        </ul>
      </header>

      <div className="ongs-list-container">
        <h1>Lista de ONGs</h1>

        <ul>
          {ongs.map((ongs) => {
            return (
              <li key={ongs.id_ong}>
                <strong className="ongTitle">{ongs.name}</strong>
                <strong className="ongLocal">
                  {ongs.cidade}, {ongs.uf}
                </strong>
                <p>{ongs.necessities}</p>
                <button
                  key={ongs.id_ong}
                  onClick={() => {
                    handleProfile(ongs.id_ong);
                  }}
                >
                  Ler Mais
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
