import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../CSS/Orders.css';

const OrderCard = ({
  id,
  totalPrice,
  deliveryNumber,
  deliveryAddress,
  status,
  dtttId,
}) => (
    <Link     
      className="order-card"
      to={ `/admin/orders/${id}` }
    >
      <div className="order-info">
        <span className="info-label">Pedido:</span>
        <span>{id}</span>
        <span
          className={ status === 'Entregue' ? 'order-delivered' : 'order-pending' }
        >
          {status}
        </span>
      </div>
      <div className="order-info">
        <span className="info-label">Endereço</span>
        <span>{`${deliveryAddress}, ${deliveryNumber}`}</span>
      </div>
      <div className="order-info">
        <span className="info-label">Total</span>
        <span>
        { `R$ ${totalPrice.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
      })}` }
        </span>
      </div>
    </Link>
);

{/* <h2>
      {`Pedido ${id}`}
    </h2>
    <h3>
      {`${deliveryAddress}, ${deliveryNumber}`}
    </h3>

    <span  className="order-total">
      { `R$ ${totalPrice.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
      })}` }
    </span>
    <span
      className={ status === 'Entregue' ? 'order-delivered' : 'order-pending' }
    >
      {status}
    </span> */}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  dtttId: PropTypes.number.isRequired,
};

export default OrderCard;
