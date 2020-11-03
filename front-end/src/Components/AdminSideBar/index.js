import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar';
import './styles.css';

const AdminSideBar = () => (
  <div className="admin-side-bar-container">
    <div>
      <h1>TryBeer</h1>
      <Link to="/admin/orders">
        <button
          type="button"
          className="btn-admin"
          data-testid="side-menu-item-orders"
        >
          Pedidos
        </button>
      </Link>
      <Link to="/admin/profile">
        <button
          type="button"
          className="btn-admin"
          data-testid="side-menu-item-profile"
        >
          Perfil
        </button>
      </Link>
    </div>
    <Link to="/login">
      <button
        type="button"
        className="btn-admin"
        data-testid="side-menu-item-logout"
      >
        Sair
      </button>
    </Link>
  </div>
);

export default AdminSideBar;
