import React, { useState } from 'react';
import { Redirect, Link, useParams  } from 'react-router-dom';
// import { getOrdersFromAPI } from '../../services/api_endpoints';
import MenuBar from '../MenuBar';
import Footer from '../Footer';
import Body from '../CSS/Body';
import './styles.css';
import realFormat from '../../utils/realFormat';

const mock = {
  id: 1,
  date: '01/01',
  products: [
    {
      qty: 14,
      name: 'Heineken 600ml',
      price: 7.5 * 14,
    },
    {
      qty: 2,
      name: 'Skol Beats Senses 313ml',
      price: 4.49 * 2,
    },
    {
      qty: 5,
      name: 'Brahma Duplo Malte 350ml',
      price: 4.79 * 5,
    },
  ],
  total: 109.9,
};

const OrdersDetails = () => {
  const { id }= useParams();

  const [order, setOrders] = useState(mock);
  // const { id } = useParams();
  const { token } = JSON.parse(localStorage.getItem('user')) || '';

  // useEffect(() => {
  //   setOrders(mock);
  //   const getData = async (id) => {
  //     setOrders(await getOrdersFromAPI(id))
  //   }
  //   getData(id);
  // }, []);

  if (!token) return <Redirect to="/login"/>

  return (
    <Body>
      <MenuBar titleName="Cliente - Detalhes de Pedido" />
      {order &&
        <div  className="order-details box-shadow">
          <div className="order-head">
            <h3 data-testid="order-number" >{`Pedido ${order.id}`}</h3>
            <h3 data-testid="order-date" >{`Data: ${order.date}`}</h3>
          </div>
          {order.products.map((product, i) => (
            <div key={product.name} className="order-product">
              <div className="name-order-container">
                <img src={`http://localhost:3001/images/${product.name}.jpg`} alt={product.name} className="logo-img-order" />
                <h4 data-testid={`${i}-product-name`} >{product.name}</h4>
              </div>
              <div className="values-box">
                <h4 data-testid={`${i}-product-qtd`} >{product.qty}</h4>
                <h4 data-testid={`${i}-product-total-value`} >R$ {realFormat(product.price)}</h4>
              </div>
            </div>
          ))}
          <h3 data-testid="order-total-value" >{`Total: R$${realFormat(order.total)}`}</h3>
        </div>}
        <Link to="/orders"><button className="orders-btn">Voltar</button></Link>
        <Link to={`/orders/${parseInt(id, 10) + 1}`}><button className="orders-btn">Próximo pedido</button></Link>
      <Footer />
    </Body>
  );
};

export default OrdersDetails;
