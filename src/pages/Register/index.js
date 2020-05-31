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
          <div className="grid">
            <div className="User-Group">
              <label>
                Nome de Usuário<span className="required">*</span>
                <input
                  placeholder="Usuário.."
                  value={user_name}
                  maxLength="20"
                  onChange={(e) => setUser_name(e.target.value)}
                />
              </label>
              <label>
                Email de Usuário<span className="required">*</span>
                <input
                  placeholder="jhon@exemplo.com"
                  value={email_user}
                  maxLength="30"
                  onChange={(e) => setEmail_user(e.target.value)}
                />
              </label>
              <label>
                Senha<span className="required">*</span>
                <input
                  maxLength="12"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="Ong-Group">
              <label>
                Nome da sua ONG<span className="required">*</span>
                <input
                  placeholder="Ex: Ornagização de Tecnologia Social"
                  value={name}
                  maxLength="50"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                Nome Fantasia
                <input
                  placeholder="Fundação tecnologia social, FTS"
                  maxLength="50"
                  value={name_fantasy}
                  onChange={(e) => setName_fantasy(e.target.value)}
                />
              </label>
              <label>
                Email de Contato<span className="required">*</span>
                <input
                  placeholder="Email da ONG"
                  maxLength="50"
                  value={email_ong}
                  onChange={(e) => setEmail_ong(e.target.value)}
                />
              </label>

              <label>
                Número de Contato<span className="required">*</span>
                <input
                  placeholder="(xx)xxxxx-xxxx"
                  maxLength="14"
                  value={cel_number}
                  onChange={(e) => setCel_number(e.target.value)}
                />
              </label>
              <label>
                Seu CNPJ (Formatado com pontos)
                <span className="required">*</span>
                <input
                  placeholder="xx.xxx.xxx/xxxx-xx"
                  value={cnpj}
                  maxLength="18"
                  onChange={(e) => setCnpj(e.target.value)}
                />
              </label>
              <label>
                Sua Rua e Número<span className="required">*</span>
                <input
                  placeholder="Rua do Ipiranga, 35"
                  value={rua}
                  maxLength="50"
                  onChange={(e) => setRua(e.target.value)}
                />
              </label>
              <label>
                Seu Bairro<span className="required">*</span>
                <input
                  placeholder="Bairro da Tijuca"
                  value={bairro}
                  maxLength="50"
                  onChange={(e) => setBairro(e.target.value)}
                />
              </label>
              <label>
                CEP<span className="required">*</span>
                <input
                  placeholder="xxxxxxxx"
                  value={cep}
                  maxLength="8"
                  onChange={(e) => setCep(e.target.value)}
                />
              </label>
              <label>
                Cidade<span className="required">*</span>
                <input
                  placeholder="Ex: São Paulo"
                  value={cidade}
                  maxLength="30"
                  onChange={(e) => setCidade(e.target.value)}
                />
              </label>
              <label>
                UF<span className="required">*</span>
                <input
                  value={uf}
                  maxLength="2"
                  onChange={(e) => setUf(e.target.value)}
                />
              </label>
            </div>
            <div className="Text-description">
              <label>
                Descreva sua ONG
                <textarea
                  className="description"
                  placeholder="Descrição das sua Causa"
                  maxLength="700"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <button className="Button" type="submit">
                Enviar
              </button>
            </div>
            <div className="Text-necessities">
              <label>
                Insira suas necessidades
                <textarea
                  className="necessities"
                  placeholder="O que você precisa para sua ONG? Digite aqui.."
                  maxLength="300"
                  value={necessities}
                  onChange={(e) => setNecessities(e.target.value)}
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
