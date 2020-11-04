import React from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../Footer';
import Body from '../CSS/Body';
import Header from '../Header';
import ColumnContainer from '../CSS/ColumnContainer';
import './styles.css';

const AdminProfile = () => {
  const { name, email } = JSON.parse(localStorage.getItem('user')) || '';
  const buttons = [
    {name: "Pedidos", link: '/admin/orders'},
    {name: "Sair", link: '/login'}
  ];

  if (!name) return <Redirect to="/login" />;

  return (
    <Body className="admin-profile">
      <Header title="Perfil" buttons={buttons}/>
      <ColumnContainer className="admin-profile-aside">
        <section>
          <span>Nome / Username</span>
          <div data-testid="profile-name">
            <span>{name}</span>
          </div>
        </section>
        <section>
        <span>Email</span>
          <div data-testid="profile-email">
            <span>{email}</span>
          </div>
        </section>
      </ColumnContainer>
      <Footer />
    </Body>
  );
};

export default AdminProfile;
