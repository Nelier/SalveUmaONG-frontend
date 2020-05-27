import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Register() {
  //User
  const [email_user, setEmail_user] = useState('');
  const [password, setPassword] = useState('');
  const [user_name, setUser_name] = useState('');
  //Adress
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  //Ong
  const [name, setName] = useState('');
  const [name_fantasy, setName_fantasy] = useState('');
  const [email_ong, setEmail_ong] = useState('');
  const [description, setDescription] = useState('');
  const [necessities, setNecessities] = useState('');
  const [cel_number, setCel_number] = useState('');
  const [cnpj, setCnpj] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      email_user,
      password,
      user_name,
      rua,
      bairro,
      cidade,
      cep,
      uf,
      name,
      name_fantasy,
      email_ong,
      description,
      necessities,
      cel_number,
      cnpj,
    };

    try {
      const response = await api.post('/singup', data);

      alert(`Seu ID de acesso: ${response.data.id_user}`);
    } catch (error) {
      alert('Erro ao cadastrar: ' + error);
    }
  }

  return (
    <div className="register-component">
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
      <div className="register-container">
        <h1>Cadastre-se</h1>

        <div className="col"></div>

        <span>
          Capriche em suas informações, elas serão usadas para que possíveis
          voluntários entrem em contato
        </span>
        <br />
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome de usuário"
            value={user_name}
            maxLength="20"
            onChange={(e) => setUser_name(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email_user}
            maxLength="30"
            onChange={(e) => setEmail_user(e.target.value)}
          />
          <input
            placeholder="Password"
            maxLength="12"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Nome da ONG"
            value={name}
            maxLength="50"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Nome Fantasia"
            maxLength="30"
            value={name_fantasy}
            onChange={(e) => setName_fantasy(e.target.value)}
          />
          <input
            placeholder="Email da ONG"
            maxLength="30"
            value={email_ong}
            onChange={(e) => setEmail_ong(e.target.value)}
          />
          <textarea
            placeholder="Descrição da Causa"
            maxLength="400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea
            placeholder="Suas Necessidades"
            maxLength="800"
            value={necessities}
            onChange={(e) => setNecessities(e.target.value)}
          />
          <input
            placeholder="(xx)xxxxx-xxxx"
            maxLength="14"
            value={cel_number}
            onChange={(e) => setCel_number(e.target.value)}
          />
          <input
            placeholder="xx.xxx.xxx/xxxx-xx"
            value={cnpj}
            maxLength="18"
            onChange={(e) => setCnpj(e.target.value)}
          />
          <input
            placeholder="Rua"
            value={rua}
            maxLength="50"
            onChange={(e) => setRua(e.target.value)}
          />
          <input
            placeholder="Bairro"
            value={bairro}
            maxLength="50"
            onChange={(e) => setBairro(e.target.value)}
          />
          <input
            placeholder="xxxxxxxx"
            value={cep}
            maxLength="8"
            onChange={(e) => setCep(e.target.value)}
          />
          <input
            placeholder="Cidade"
            value={cidade}
            maxLength="30"
            onChange={(e) => setCidade(e.target.value)}
          />
          <input
            placeholder="UF"
            value={uf}
            maxLength="2"
            onChange={(e) => setUf(e.target.value)}
          />
          <button className="Button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
