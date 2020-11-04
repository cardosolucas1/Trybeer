import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validateInput from '../utils/validate';
import { getUserFromAPI } from '../services/api_endpoints';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Body from '../Components/CSS/Body';
import SectionInput from '../Components/CSS/TextInput';
import Button from '../Components/CSS/Button';
import { toast, ToastContainer } from 'react-toastify';

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
      toast.error(data.message, {
        autoClose: 3000,
        pauseOnHover: true
      });
      return;
    }
    const { role, token } = data;
    if (token) {
      localStorage.setItem('user', JSON.stringify(data));
      toast.success('Login identificado', {
        autoClose: 1500,
        pauseOnHover: true
      });

      setTimeout(() => {
        setUserRole(role);
      }, 1550);
   
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
      <ToastContainer />
        <SectionInput className="form">
          <label htmlFor="email">
            Email
            <input
              autoComplete="off"
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
              autoComplete="off"
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
