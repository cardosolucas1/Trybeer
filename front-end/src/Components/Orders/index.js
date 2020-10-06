import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MenuBar from '../MenuBar';
import { getProductsLocalStorage } from '../../utils/localStorage';
import { getOrdersFromAPI } from '../../services/api_endpoints'
import './styles.css';
import Footer from '../Footer';

const mockOrders = [
  {
    id: 1,
    sale_date: '01/01',
    total_price: 109.9,
  },
  {
    id: 2,
    sale_date: '02/01',
    total_price: 114.3,
  },
  {
    id: 3,
    sale_date: '05/01',
    total_price: 49.7,
  },
  {
    id: 5,
    sale_date: '16/01',
    total_price: 19.9,
  },
  {
    id: 6,
    sale_date: '16/01',
    total_price: 199.74,
  },
];

const Orders = () => {
  const quantityOfDigits = 2;
  const [orders, setOrders] = useState(mockOrders);
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
    const day = new Date(date).getDate()
    const month = new Date(date).getMonth() + 1;
    if (day < 10) return `0${day}/${month}`;
    return `${day}/${month}`;
  };

  const formatTotal = (total) => `R$ ${total.toFixed(quantityOfDigits).replace('.', ',')}`

  if (redirect) return <Redirect to="/login" />;
  return (
    <>
      <MenuBar titleName="Cliente - Meus Pedidos" />
      <section className="orders-list">
        {orders.sort().map(({ id: orderId, sale_date: date, total_price: total }, index) => (
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
