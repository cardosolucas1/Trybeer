import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MenuBar from '../MenuBar';
import { getProductsLocalStorage } from '../../utils/localStorage';
import { getOrdersFromAPI } from '../../services/api_endpoints';
import '../CSS/Orders.css';
import Footer from '../Footer';

const Orders = () => {
  const quantityOfDigits = 2;
  const dateDigit = 10;
  const [orders, setOrders] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchData = async (token, id) => {
      const sales = await getOrdersFromAPI(token, id);
      setOrders(sales);
      return sales;
    };
    const { id, token } = getProductsLocalStorage('user');
    if (!token) setRedirect(true);
    fetchData(token, id);
  }, []);

  const formatDate = (date) => {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    if (day < dateDigit) return `0${day}/${month}`;
    return `${day}/${month}`;
  };

  const formatTotal = (total) => `R$ ${total.toFixed(quantityOfDigits).replace('.', ',')}`;

  if (redirect) return <Redirect to="/login" />;
  return (
    <>
      <MenuBar titleName="Cliente - Meus Pedidos" />
      <section className="orders-list">
        {orders.sort().map(({ id: orderId, saleDate: date, totalPrice: total }, index) => (
          <Link
            data-testid={ `${index}-order-card-container` }
            key={ orderId }
            className="order-card"
            to={ `orders/${orderId}` }
          >
            <div className="order-info">
              <span className="info-label">Pedido:</span>
              <span data-testid={ `${index}-order-number` }>
                { `Pedido ${orderId}` }
              </span>
            </div>
            <div className="order-info">
              <span>Data:</span>
              <span data-testid={ `${index}-order-date` }>
                { formatDate(date) }
              </span>
            </div>
            <div className="order-info">
              <span>Total pago</span>
              <span data-testid={ `${index}-order-total-value` }>
                { formatTotal(total) }
              </span>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Orders;
