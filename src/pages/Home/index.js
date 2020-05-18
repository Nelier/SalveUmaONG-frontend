import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Home() {
  return (
    <div class="home-container">
      <header>
        <span>Bem Vinda, ONG</span>
      </header>

      <div class="ongs-list-container">
        <h1>Lista de ONGs</h1>

        <ul class="listaONGs">
          <li></li>
        </ul>
      </div>
    </div>
  );
}
