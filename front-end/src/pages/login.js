import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validateInput from '../utils/validate';
import { getUserFromAPI } from '../services/api_endpoints';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Body from '../Components/CSS/Body';
import SectionInput from '../Components/CSS/TextInput';
import Button from '../Components/CSS/Button';
// import './login.css';
// import '../../index.css';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [userRole, setUserRole] = useState('');
  const [error, setError] = useState({});
  const { email, password } = form;

  const handleInput = (e) => {
    const { name, value } = e.target;
    return validateInput(name, value)
      ? setForm({ ...form, [name]: value })
      : setForm({ ...form, [name]: '' });
  };

  const getUserData = async () => {
    const { data } = await getUserFromAPI(email, password);
    if (data.message) {
      setError({ message: data.message });
      setTimeout(() => {
        setError({ message: null });
      }, 3000)
      return;
    }
    const { role, token } = data;
    if (token) {
      localStorage.setItem('user', JSON.stringify(data));
      setUserRole(role);
    }
    return true;
  };

  if (userRole === 'administrator') return <Redirect to="/admin/orders" />;
  if (userRole === 'client') return <Redirect to="/products" />;

  return (
    <Body>
      <Header title="Faça login"
        buttons={[
          { name: 'Voltar', link: '/' },
          { name: 'Não sou cadastrado', link: '/register' }
        ]}
      />
      {/* <RowContainer className="login-container default-color box-shadow"> */}
        <SectionInput className="form">
          {error.message && <h4>{error.message}</h4>}
          <label htmlFor="email">
            Email
            <input
              autocomplete="off"
              id="email"
              className="text-box"
              name="email"
              data-testid="email-input"
              onChange={ (event) => handleInput(event) }
              type="email"
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              autocomplete="off"
              id="password"
              className="text-box"
              data-testid="password-input"
              onChange={ (event) => handleInput(event) }
              name="password"
              required
              type="password"
            />
          </label>
          <Button
            className="login-btn confirm-btn"
            disabled={ email === '' || password === '' }
            type="button"
            data-testid="signin-btn"
            onClick={ () => getUserData(email, password) }
          >
            ENTRAR
          </Button>
          <Link to="./register">
            <Button
              className="login-btn confirm-btn"
              type="button"
              data-testid="register-btn"
              onClick={ () => getUserData(email, password) }
            >
              CADASTRO
            </Button>
          </Link>
        </SectionInput>
      {/* </RowContainer> */}
      <Footer />
    </Body>
  );
}

export default LoginPage;
