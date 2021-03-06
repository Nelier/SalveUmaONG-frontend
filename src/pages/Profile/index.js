import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import Popup from 'reactjs-popup';

import api from '../../services/api';

import './styles.css';
import logo from '../../assets/img/logoWeb.png';

export default function ProfileTest() {
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

  const [modal, setModal] = useState(false);

  const [email_visitor, setEmail_visitor] = useState('');
  const [name_visitor, setName_visitor] = useState('');

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
  }, [ongID]);

  async function handleNewsletter() {

    const data = {
      name_visitor,
      email_visitor,
    }

    if (data.ongID != '') {

      try {
        const response = await api.post(`/newsletter/${ongID}`, data, {
          headers: {
            authorization: true,
          }
        });

        console.log(response);

        alert("Cadastrado na NewsLetter!");

        if (response) {
          return null;
        }
      } catch (error) {
        alert(error);
      }
    }
  }

  async function handleLogin() {
    return alert(`funcionou o id_ong, o id: ${ongID}`);
  }

  async function handleCancel() {
    history.push('/');
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <div className="profile-component">
      <header>
        <span>
          <img src={logo} style={{ height: '60px', width: '70px' }} />
        </span>
        <ul className="nav-bar">
          <li>
            <Link className="home-link" to="/">
              Voltar a Home
            </Link>
          </li>
        </ul>
      </header>
      <div className="profile-container">
        <div className="white-box-1">
          <div className="content">
            <h1 className="ongTitle">{name}</h1>
            <h3 className="ongLocal">{`${cidade}, ${uf}`}</h3>
            <h2>Quer nos ajudar?</h2>
            <p className="ongNecessities">{necessities}</p>
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
          <p className="ongDescription">{description}</p>


          <div className="Inscrever">
            <p>Deseja receber mais informações sobre essa ONG?</p>
            <button className="Inscrever-button"
              onClick={() => { setModal(true); }}>
              Inscrever-se
                        </button>


            <Popup open={modal} onClose={closeModal} modal>
              <div className="popup-header">
                <h3>Forneça seu nome e email para receber todas as novidades</h3>
              </div>
              <div className="popup-content">
                <form onSubmit={handleNewsletter}>
                  <label>
                    Seu Nome:
                                        <input
                      placeholder="Victor"
                      value={name_visitor}
                      maxLength="50"
                      onChange={(e) => {
                        let aux = e.target.value;
                        let value = aux.replace(/[0-9]/g, '');
                        setName_visitor(value);
                      }}
                      required="required" />
                  </label>

                  <label>
                    Email:
                                        <input
                      placeholder="exemplo@exemplo.com"
                      value={email_visitor}
                      maxLength="80"
                      onChange={(e) => { setEmail_visitor(e.target.value); }}
                      required="required" />
                  </label>

                  <button className="Inscrever-button" type="submit">
                    Cadastrar
                                    </button>
                </form>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </div >
  );
}
