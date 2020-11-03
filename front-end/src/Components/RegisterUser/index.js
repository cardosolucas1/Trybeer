import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Body from '../CSS/Body';
import TextInputContainer from '../CSS/TextInput';
import validateInput from '../../utils/validate';
import { postNewUserAPI } from '../../services/api_endpoints';
import './styles.css';

const friends = require('../../images/friends.png');

const RegisterUser = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    seller: false,
  });
  const [error, setError] = useState({});
  const [userCreated, setRedirect] = useState({ redirect: false, role: '' });
  const {
    email,
    password,
    name,
    seller,
  } = form;
  const { redirect, role } = userCreated;

  const handleInput = (e) => {
    if (e === 'seller') return setForm({ ...form, seller: !seller });
    const { name: userName, value } = e.target;
    return validateInput(userName, value)
      ? setForm({ ...form, [userName]: value })
      : setForm({ ...form, [userName]: '' });
  };

  const createNewUser = async () => {
    const unprocessableEntityCode = 422;
    const { message, status, token } = await postNewUserAPI(name, email, password, seller);
    if (status === unprocessableEntityCode) return setError({ message });
    if (token) {
      const data = { name, email, token };
      localStorage.setItem('user', JSON.stringify(data));
      setRedirect({ redirect: true, role: seller ? 'administrador' : 'client' });
    }
    return null;
  };
  if (redirect) {
    return (role === 'client'
      ? <Redirect to="/products" />
      : <Redirect to="/admin/orders" />);
  }
  return (
    <Body>
      <Header title="Cadastro" buttons={[{ name: 'Login', link: '/login'}]}/>
      {/* <section className="register-container default-color shadow"> */}
        {/* <img src={ friends } alt="Icone de duas cervejas" width="100px" /> */}
        {error.message && <p>{error.message}</p>}
        <TextInputContainer>
          <label htmlFor="userName">
            Nome
            <input
              autoComplete="off"
              className="input-register"
              onChange={ (e) => handleInput(e) }
              type="text"
              name="name"
              id="userName"
              data-testid="signup-name"
            />
          </label>
          <label htmlFor="userEmail">
            Email
            <input
              autoComplete="off"
              className="input-register"
              onChange={ (e) => handleInput(e) }
              type="email"
              name="email"
              id="userEmail"
              data-testid="signup-email"
            />
          </label>
          <label htmlFor="userPassword">
            Password
            <input
              autoComplete="off"
              className="input-register"
              onChange={ (e) => handleInput(e) }
              type="password"
              name="password"
              id="userPassword"
              minLength="6"
              data-testid="signup-password"
            />
          </label>
          
          <button
            onClick={ () => createNewUser() }
            className="confirm-btn"
            disabled={ email === '' || password === '' || name === '' }
            type="button"
            data-testid="signup-btn"
          >
            Cadastrar
          </button>
          <button
            onChange={ () => handleInput('seller') }
            className="confirm-btn"
            disabled={ email === '' || password === '' || name === '' }
            type="button"
            data-testid="signup-btn"
          >
            Sou vendedor
          </button>
        </TextInputContainer>
        
      {/* </section> */}
      <Footer />
    </Body>
  );
};

export default RegisterUser;
