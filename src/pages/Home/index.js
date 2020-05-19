import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Home() {
  const [ongs, setOngs] = useState('');

  async function handlePopUp() {}

  return (
    <div class="home-container">
      <header>
        <span>Bem Vinda, ONG</span>
      </header>

      <div class="ongs-list-container">
        <h1>Lista de ONGs</h1>

        <ul>
          <li>
            <strong class="ongTitle"> Organização dos Programadores</strong>
            <strong class="ongLocal">São Paulo, SP</strong>
            <p>
              Estamos precisando de programadores voluntários para a criação de
              uma API Rest
            </p>
            <button>Ler Mais</button>
          </li>

          <li>
            <strong class="ongTitle"> Organização dos Programadores</strong>
            <strong class="ongLocal">São Paulo, SP</strong>
            <p>
              Estamos precisando de programadores voluntários para a criação de
              uma API Rest
            </p>
            <button>Ler Mais</button>
          </li>

          <li>
            <strong class="ongTitle"> Organização dos Programadores</strong>
            <strong class="ongLocal">São Paulo, SP</strong>
            <p>
              Estamos precisando de programadores voluntários para a criação de
              uma API Rest
            </p>
            <button>Ler Mais</button>
          </li>
          <li>
            <strong class="ongTitle"> Organização dos Programadores</strong>
            <strong class="ongLocal">São Paulo, SP</strong>
            <p>
              Estamos precisando de programadores voluntários para a criação de
              uma API Rest
            </p>
            <button>Ler Mais</button>
          </li>
          <li>
            <strong class="ongTitle"> Organização dos Programadores</strong>
            <strong class="ongLocal">São Paulo, SP</strong>
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
