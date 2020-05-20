import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Home() {
  const [userId, setUserId] = useState('');
  const [ongs, setOngs] = useState('');
  const [isLoggedIn, setisLoggedIn] = useState(false);

  async function handlePopUp() {}

  function isLogged() {
    if (isLoggedIn) {
      return <span className="bem-vindo">Bem Vindo(a), ONG</span>;
    } else {
      return <span className="bem-vindo">Bem Vindo, Convidado</span>;
    }
  }

  function changeLogged() {
    if (isLoggedIn) {
      setisLoggedIn(false);
    } else {
      setisLoggedIn(true);
    }
  }

  return (
    <div className="home-component">
      <header>
        {isLogged()}
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
            <button className="ButtonTest" onClick={changeLogged}>
              Deixar Logado
            </button>
          </li>
        </ul>
      </header>

      <div className="ongs-list-container">
        <h1>Lista de ONGs</h1>

        <ul>
          <li>
            <strong className="ongTitle"> Organização dos Programadores</strong>
            <strong className="ongLocal">São Paulo, SP</strong>
            <p>
              Estamos precisando de programadores voluntários para a criação de
              uma API Rest
            </p>
            <button>Ler Mais</button>
          </li>

          <li>
            <strong className="ongTitle"> Organização dos Programadores</strong>
            <strong className="ongLocal">São Paulo, SP</strong>
            <p>
              Estamos precisando de programadores voluntários para a criação de
              uma API Rest
            </p>
            <button>Ler Mais</button>
          </li>

          <li>
            <strong className="ongTitle"> Organização dos Programadores</strong>
            <strong className="ongLocal">São Paulo, SP</strong>
            <p>
              Estamos precisando de programadores voluntários para a criação de
              uma API Rest
            </p>
            <button>Ler Mais</button>
          </li>

          <li>
            <strong className="ongTitle"> Organização dos Programadores</strong>
            <strong className="ongLocal">São Paulo, SP</strong>
            <p>
              Estamos precisando de programadores voluntários para a criação de
              uma API Rest
            </p>
            <button>Ler Mais</button>
          </li>

          <li>
            <strong className="ongTitle"> Organização dos Programadores</strong>
            <strong className="ongLocal">São Paulo, SP</strong>
            <p>
              Estamos precisando de programadores voluntários para a criação de
              uma API Rest
            </p>
            <button>Ler Mais</button>
          </li>

          <li>
            <strong className="ongTitle"> Organização dos Programadores</strong>
            <strong className="ongLocal">São Paulo, SP</strong>
            <p>
              Estamos precisando de programadores voluntários para a criação de
              uma API Rest
            </p>
            <button>Ler Mais</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
