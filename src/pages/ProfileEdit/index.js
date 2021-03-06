import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Popup from 'reactjs-popup';

import api from '../../services/api';

import './styles.css';
import logo from '../../assets/img/logoWeb.png';

export default function ProfileEdit() {
  const [userID, setUserID] = useState('');
  const [ongID, setOngID] = useState('');

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

  const [changeNecessities, setChangeN] = useState('');
  const [changeDescription, setChangeD] = useState('');

  const history = useHistory();
  const localtest = localStorage.getItem('id_user');

  useEffect(() => {
    if (localtest != null) {
      setUserID(localtest);

      const data = {
        userID,
      };
      if (data.userID != '') {
        const request = async () => {
          try {
            const response = await api.post('/profile', data);
            setOngID(response.data[0].id_ong);
            setName(response.data[0].name);
            setName_fantasy(response.data[0].name_fantasy);
            setEmail_ong(response.data[0].email_ong);
            setDescription(response.data[0].description);
            setNecessities(response.data[0].necessities);
            setCel_number(response.data[0].cel_number);
            setCnpj(response.data[0].cnpj);
            setRua(response.data[0].rua);
            setBairro(response.data[0].bairro);
            setCidade(response.data[0].cidade);
            setUf(response.data[0].uf);
          } catch (err) {
            alert('Não conseguimos puxar esta ong!');
            history.push('/');
          }
        };
        request();
      }
    } else {
      alert(
        'Você não tem permissão para acessar esta página! Por favor, faça login novamente.'
      );
      history.push('/');
    }
  }, [userID]);

  function clearStorage() {
    localStorage.removeItem('id_user');
  }

  async function updateInfo() {
    const changeData = {
      necessities,
      description,
      userID,
    };

    try {
      const response = await api.put('/singup', changeData);
      alert('Informações atualizadas com sucesso!');
    } catch (error) {
      alert('Erro ao atualizar!');
    }
  }

  async function deleteInfo() {
    const deleteData = {
      ongID: ongID,
      userID: userID,
    };

    console.log(deleteData);

    try {
      const response = await api.post('/delete', deleteData);
      alert('Suas Conta foi deletada!');
      history.push('/');
    } catch (error) {
      alert('Não foi possivel deletar sua conta!');
    }
  }

  // Inicio do componente
  if (userID == '') {
    return <h1>Error! Can't access requested page!</h1>;
  }

  return (
    <div className="edit-component">
      <header>
        <span>
          <img src={logo} style={{ height: '60px', width: '70px' }} />
        </span>
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
        <div className="white-box-1">
          <div className="content">
            <h1 className="ongTitle">{name}</h1>
            <h3 className="ongLocal">{`${cidade}, ${uf}`}</h3>
            <h2>Quer nos ajudar?</h2>
            <textarea
              className="ongNecessities"
              defaultValue={necessities}
              value={necessities}
              maxLength="240"
              style={{
                width: '90%',
                height: '150px',
                marginLeft: '20px',
                marginBottom: '20px',
              }}
              onChange={(e) => setNecessities(e.target.value)}
            ></textarea>
            <h2>Contato</h2>
            <strong className="label">Local</strong>
            <p className="rua">{`${bairro}, ${rua}`}</p>
            <strong className="label">Email</strong>
            <p className="email">{email_ong}</p>
            <strong className="label">Telefone</strong>
            <p className="email">{cel_number}</p>
          </div>
        </div>

        <div className="white-box-2">
          <h1 className="QuemSomos">Quem somos</h1>
          <h3 className="name-fantasy">{name_fantasy}</h3>
          <textarea
            className="ongDescription"
            maxLength="700"
            defaultValue={description}
            value={description}
            style={{
              width: '90%',
              height: '400px',
              marginLeft: '20px',
              marginBottom: '20px',
            }}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="buttons-container">
            <Popup
              trigger={<button className="delete">DELETAR</button>}
              position="top center"
            >
              <div>Deseja mesmo deletar? Esta ação não pode ser desfeita.</div>
              <button className="delete" onClick={() => deleteInfo()}>
                CONFIRMAR
              </button>
            </Popup>
            <button className="update" onClick={() => updateInfo()}>
              ATUALIZAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
