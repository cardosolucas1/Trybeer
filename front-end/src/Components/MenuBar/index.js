import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';
import '../../index.css';

const MenuBar = ({ titleName }) => {
  const [change, setChange] = useState(false);

  const getOut = () => {
    localStorage.clear();
  }

  return (
    <div className="menu-container">
      <div className="menu">
        <button
          data-testid="top-hamburguer"
          type="button"
          className={ change ? 'change menu-bar menu-btn' : 'menu-bar menu-btn' }
          onClick={ () => setChange(!change) }
        >
          <div className="bar1 bar" />
          <div className="bar2 bar" />
          <div className="bar3 bar" />
        </button>
        <nav className={ change ? 'side-menu-container change' : 'side-menu-container' }>
          <ul>
            <li><Link data-testid="side-menu-item-products" to="/products">Produtos</Link></li>
            <li><Link data-testid="side-menu-item-my-orders" to="/orders">Meus pedidos</Link></li>
            <li><Link data-testid="side-menu-item-my-profile" to="/profile">Meu perfil</Link></li>
            <li><Link onClick={() => getOut()}data-testid="side-menu-item-logout" to="/login">Sair</Link></li>
          </ul>
        </nav>
      </div>
      <div className={ change ? 'menu-bg change-bg box-shadow' : 'menu-bg box-shadow' }>
        <h2 data-testid="top-title" className="title">{ titleName }</h2>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  titleName: PropTypes.string.isRequired,
};

export default MenuBar;
