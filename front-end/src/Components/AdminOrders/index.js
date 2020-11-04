import React, { useState, useEffect } from 'react';
import { getOrderList } from '../../services/api_endpoints';
import OrderCard from '../OrderCard';
import Footer from '../Footer';
import Body from '../CSS/Body';
import Header from '../Header';
import './styles.css';

const AdminOrdersPage = () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const [productList, setProductList] = useState([]);
  const buttons = [
    { name: 'Perfil', link: '/admin/profile'},
    { name: 'Sair', link: '/'},
  ];

  useEffect(() => {
    const fetchOrders = async () => await getOrderList(token) || [];

    fetchOrders().then((orders) => setProductList(orders));
  }, [token]);

  return (
    <Body className="admin-orders">
      <Header title="TryBeer" buttons={buttons}/>
      <section className="orders-list">
        {productList.map(({
          id,
          totalPrice,
          deliveryAddress,
          deliveryNumber,
          status,
        }, index) => (
          <OrderCard
            key={ id }
            id={ id }
            totalPrice={ totalPrice }
            deliveryAddress={ deliveryAddress }
            deliveryNumber={ deliveryNumber }
            status={ status }
            dtttId={ index }
            />
        )) }
      </section>
      <Footer />
    </Body>
  );
};

export default AdminOrdersPage;
