import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Profile() {
  const [ongID, setOngId] = useState('');
  const [resData, setResData] = useState({});

  const [name, setName] = useState('');
  const [name_fantasy, setName_fantasy] = useState('');
  const [email_ong, setEmail_ong] = useState('');
  const [description, setDescription] = useState('');
  const [necessities, setNecessities] = useState('');
  const [cel_number, setCel_number] = useState('');
  const [cnpj, setCnpj] = useState('');

  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();
  const id_ongLocal = localStorage.getItem('id_ong');

  useEffect(() => {
    setOngId(id_ongLocal);

    const data = {
      ongID,
    };
    if (data.ongID != '') {
      const request = async () => {
        try {
          const response = await api.post('/profile', data);
          setName(response.data[0].name);
          setName_fantasy(response.data[0].name_fantasy);
          setEmail_ong(response.data[0].email_ong);
          setDescription(response.data[0].description);
          setNecessities(response.data[0].necessities);
          //Terminar de Preencher respostas da requisição...
        } catch (err) {
          alert('Não conseguimos puxar esta ong!');
          history.push('/');
        }
      };
      request();
    }
  }, [ongID]);

  async function handleLogin() {
    return alert(`funcionou o id_ong, o id: ${ongID}`);
  }

  async function handleCancel() {
    history.push('/');
  }

  return (
    <div className="profile-component">
      <header>
        <span></span>
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
