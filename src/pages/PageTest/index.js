import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Popup from 'reactjs-popup';

import api from '../../services/api';

import './styles.css';
import logoWeb from '../../assets/img/logoWeb.png';

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

    const [recivedID, setRecivedID] = useState('');

    const [modal, setModal] = useState(false);

    const [personal_data, setPersonal_data] = useState(false);
    const [sensitive_data, setSensitive_data] = useState(false);
    const [use_data, setuse_data] = useState(false);
    const [cookies, setcookies] = useState(false);

    const history = useHistory();

    const [registerLGPD, setRegisterLGPD] = useState(false);

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

            setRecivedID(response.data.id_user);

            if (response.data.id_user != '') {
                handleLGPD(response.data.id_user);

            } else {
                alert('Email já cadastrado');
            }

            //alert(`Seu ID de acesso: ${response.data.id_user}`);
        } catch (error) {
            alert('Erro ao cadastrar user: ' + error);
        }
    }

    async function handleLGPD(id) {

        const data = {
            id_user: id,
            personal_data,
            sensitive_data,
            use_data,
            cookies,
        }

        try {
            const response = await api.post('/lgpd', data)

            console.log("tentou");

            if (response) {
                setModal(true);
            } else {
                alert("Aceite as seções obrigatórias do Termo de Privacidade.")
            }
        } catch (error) {
            alert("Erro ao cadastrar lgpd: " + error)
        }
    }

    return (
        <div className="register-component">
            <header>
                <span>
                    <img src={logoWeb} style={{ height: '60px', width: '70px' }} />
                </span>
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
                            <div style={{ margin: '10px' }}>
                                <strong>Informações de Usuário</strong>
                            </div>
                            <label>
                                Nome de Usuário<span className="required">*</span>
                                <input
                                    placeholder="Usuário.."
                                    value={user_name}
                                    maxLength="20"
                                    onChange={(e) => setUser_name(e.target.value)}
                                    required="required"
                                />
                            </label>
                            <label>
                                Email de Usuário<span className="required">*</span>
                                <input
                                    placeholder="jhon@exemplo.com"
                                    value={email_user}
                                    maxLength="30"
                                    onChange={(e) => setEmail_user(e.target.value)}
                                    required="required"
                                />
                            </label>
                            <label>
                                Senha<span className="required">*</span>
                                <input
                                    maxLength="12"
                                    value={password}
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required="required"
                                />
                            </label>
                        </div>
                        <div className="Ong-Group">
                            <div style={{ margin: '10px' }}>
                                <strong>Informações da Organização</strong>
                            </div>
                            <label>
                                Nome da sua ONG<span className="required">*</span>
                                <input
                                    placeholder="Ex: Ornagização de Tecnologia Social"
                                    value={name}
                                    maxLength="50"
                                    onChange={(e) => setName(e.target.value)}
                                    required="required"
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
                                    required="required"
                                />
                            </label>

                            <label>
                                Número de Contato<span className="required">*</span>
                                <input
                                    placeholder="(xx)xxxxx-xxxx"
                                    maxLength="11"
                                    value={cel_number}
                                    onChange={(e) => {
                                        let aux = e.target.value;
                                        let value = aux.replace(/\D/g, '');
                                        setCel_number(value);
                                    }}
                                    required="required"
                                />
                            </label>
                            <label>
                                CNPJ
                <span className="required">*</span>
                                <input
                                    placeholder="xx.xxx.xxx/xxxx-xx"
                                    value={cnpj}
                                    maxLength="14"
                                    onChange={(e) => {
                                        let aux = e.target.value;
                                        let value = aux.replace(/\D/g, '');
                                        setCnpj(value);
                                    }}
                                    required="required"
                                />
                            </label>
                            <label>
                                Rua e Número<span className="required">*</span>
                                <input
                                    placeholder="Rua do Ipiranga, 35"
                                    value={rua}
                                    maxLength="50"
                                    onChange={(e) => setRua(e.target.value)}
                                    required="required"
                                />
                            </label>
                            <label>
                                Bairro<span className="required">*</span>
                                <input
                                    placeholder="Bairro da Tijuca"
                                    value={bairro}
                                    maxLength="50"
                                    onChange={(e) => {
                                        let aux = e.target.value;
                                        let value = aux.replace(/[0-9]/g, '');
                                        setBairro(value);
                                    }}
                                    required="required"
                                />
                            </label>
                            <label>
                                CEP<span className="required">*</span>
                                <input
                                    placeholder="xxxxxxxx"
                                    value={cep}
                                    maxLength="8"
                                    onChange={(e) => {
                                        let aux = e.target.value;
                                        let value = aux.replace(/\D/g, '');
                                        setCep(value);
                                    }}
                                    required="required"
                                />
                            </label>
                            <label>
                                Cidade<span className="required">*</span>
                                <input
                                    placeholder="Ex: São Paulo"
                                    value={cidade}
                                    maxLength="30"
                                    onChange={(e) => {
                                        let aux = e.target.value;
                                        let value = aux.replace(/[0-9]/g, '');
                                        setCidade(value);
                                    }}
                                    required="required"
                                />
                            </label>
                            <label>
                                UF<span className="required">*</span>
                                <input
                                    value={uf}
                                    maxLength="2"
                                    onChange={(e) => {
                                        let aux = e.target.value;
                                        let value = aux.replace(/[0-9]/g, '');
                                        setUf(value);
                                    }}
                                    required="required"
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
                            <div className="lgpd">
                                <div className="header-lgpd">
                                    <h2>Termos de Privacidade</h2>
                                    <p>Todos os dados podem ser modificados na página de configuração de usuário a qualquer momento,
                                    e serão deletados caso opte por revoga-los. Alguns dados só podem ser revogados ao deletar a conta.
                                </p>
                                </div>
                                <div className="personal_data">
                                    <h3>Permitir que usemos seus dados pessoais</h3>
                                    <label>Esses dados são necessários para o funcionamento básico do seu cadastrado
                                    e sua conta não poderá ser criada se não aceita-los. Utilizaremos para garantir
                                    suas credenciais de acesso ao logar.
                                    <input type="checkbox" id="use_data" defaultChecked={personal_data} onClick={
                                            (e) => {
                                                setPersonal_data(!personal_data);
                                                console.log(personal_data);
                                            }
                                        } />
                                    </label>
                                </div>
                                <div className="sensitive_data">
                                    <h3>Permitir que usemos seus dados sensíveis</h3>
                                    <p>Esses dados incluem sexo, cpf, religião, endereço, estado, cnpj, entre outros, e são
                                    necessários para funcionamento básico ao exibir sua ong, sua conta não poderá ser criada
                                    se não aceitá-los. Utilizaremos para guardarmos sua conta de modo seguro para que não tenha
                                    duplicatas.
                                    </p>
                                    <input type="checkbox" id="use_data" defaultChecked={sensitive_data} onClick={
                                        (e) => {
                                            setSensitive_data(!sensitive_data);
                                            console.log(sensitive_data);
                                        }
                                    } />
                                </div>
                                <div className="use_data">
                                    <h3>Permitir que coletemos seus dados de uso</h3>
                                    <p>Esses dados <strong>não</strong> são necessários para o funcionamento básico do seu cadastrado.
                                    Se aceita-los utilizaremos seus dados de forma anônima para que não seja possível identifica-lo, e
                                    irão melhorar nossas análises de como estão sendo utilizado os recursos do site.
                                    suas credenciais de acesso ao logar.</p>
                                    <input type="checkbox" id="use_data" defaultChecked={use_data} onClick={
                                        (e) => {
                                            setuse_data(!use_data);
                                            console.log(use_data);
                                        }
                                    } />
                                </div>
                                <div className="cookiess">
                                    <h3>Permitir uso de cookiess</h3>
                                    <p>Esses dados <strong>não</strong> são necessários para o funcionamento básico do seu cadastrado.
                                       Nossas páginas podem utilizar cookiess para eficiencia da página</p>
                                    <input type="checkbox" id="cookiess" defaultChecked={cookies} onClick={
                                        (e) => {
                                            setcookies(!cookies);
                                            console.log(cookies);
                                        }
                                    } />
                                </div>
                            </div>
                            <button className="Button" type="submit">
                                Enviar
                            </button>

                            <Popup open={modal} closeOnDocumentClick modal>
                                <div className="popup-modal">
                                    <div className="popup-header">ATENÇÃO</div>
                                    <div className="popup-content">
                                        <p>
                                            Por favor, salve seu ID. Ele será apresentado apenas esta
                                            vez e servirá para que você possa recuperar a sua senha
                      caso precise futuramente.{' '}
                                            <strong>Este ID será apresentado somente uma vez</strong>
                                        </p>
                                        <div style={{ marginTop: '15px' }}>
                                            <strong>Seu id:</strong>
                                            <span>{recivedID}</span>
                                        </div>
                                        <div className="popup-button">
                                            <button
                                                className="delete"
                                                onClick={() => {
                                                    setModal(false);
                                                    history.push('/');
                                                }}>
                                                Confirmar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Popup>
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
