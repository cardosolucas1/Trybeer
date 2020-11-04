import React, { useState } from 'react';
import { Redirect, Link, useParams  } from 'react-router-dom';
// import { getOrderData } from '../../services/api_endpoints';
import MenuBar from '../MenuBar';
import Footer from '../Footer';
import Body from '../CSS/Body';
import './styles.css';
import realFormat from '../../utils/realFormat';

const mock = [
  {
    quantity: 14,
    productName: 'Heineken 600ml',
    unitPrice: 7.5 * 14,
  },
  {
    quantity: 2,
    productName: 'Skol Beats Senses 313ml',
    unitPrice: 4.49 * 2,
  },
  {
    quantity: 5,
    productName: 'Brahma Duplo Malte 350ml',
    unitPrice: 4.79 * 5,
  },
];

const mockInfo = {
  address: "R PERO VAZ DE CAMINHA",
  date: 1603617282000,
  number: "26",
  saleId: 3,
  status: "Entregue",
  total: 135,
  userId: 2,
};

const OrdersDetails = () => {
  const { id }= useParams();
  const [order, setOrders] = useState(mock);
  const [saleInfo, setSaleInfo] = useState(mockInfo);
  const { token } = JSON.parse(localStorage.getItem('user')) || '';

  // useEffect(() => {
  //   const getData = async (id) => {
  //     const { saleInfo, saleItems } = await getOrderData(id);
  //     setOrders(saleItems);
  //     setSaleInfo(saleInfo);
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
            <h3 data-testid="order-number" >{`Pedido ${saleInfo.saleId}`}</h3>
            <h3 data-testid="order-date" >{`Data: ${saleInfo.date}`}</h3>
          </div>
          {order.map(({ productName, quantity, unitPrice}, i) => (
            <div key={productName} className="order-product">
              <div className="name-order-container">
                <img src={`http://localhost:3001/images/${productName}.jpg`} alt={productName} className="logo-img-order" />
                <h4 data-testid={`${i}-product-name`} >{productName}</h4>
              </div>
              <div className="values-box">
                <h4 data-testid={`${i}-product-qtd`} >{quantity}</h4>
                <h4 data-testid={`${i}-product-total-value`} >R$ {realFormat(unitPrice)}</h4>
              </div>
            </div>
          ))}
          <h3 data-testid="order-total-value" >{`Total: R$${realFormat(saleInfo.total)}`}</h3>
        </div>}
        <Link to="/orders"><button className="orders-btn">Voltar</button></Link>
        <Link to={`/orders/${parseInt(id, 10) + 1}`}><button className="orders-btn">Próximo pedido</button></Link>
      <Footer />
    </Body>
  );
};

export default OrdersDetails;
