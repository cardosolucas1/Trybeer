import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MenuBar from '../MenuBar';
import { getProductsLocalStorage } from '../../utils/localStorage';
import { postNewOrder } from '../../services/api_endpoints';
import Body from '../CSS/Body';
import ColumnContainer from '../CSS/ColumnContainer';
import RowContainer from '../CSS/RowContainer';
import Button from '../CSS/Button';
import TextInputContainer from '../CSS/TextInput';
import Footer from '../Footer';
import Box from '../Box';

const Checkout = () => {
  const history = useHistory();
  const user = getProductsLocalStorage('user');
  const [cart, setCart] = useState([]);
  const [newCart, setNewCart] = useState([]);
  const [nameAdress, setNameAdress] = useState('');
  const [numberAdress, setNumberAdress] = useState('');
  const [message, setMessage] = useState(null);
  const zero = 0;
  const seconds = 3000;

  const calculePrice = (param, paramZero) => param
    .reduce((acc, { price, quantity }) => acc + (price * quantity), paramZero);

  const formatePrice = (price) => price
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const totalPrice = calculePrice(cart, zero)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const justNumberPrice = calculePrice(cart, zero);

  const disableButtton = (price, name, number) => {
    if (price <= zero) return true;
    if (!name || !number) return true;
    return false;
  };

  const removeOrder = (index) => {
    cart.splice(index, 1);
    setNewCart(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const sendNewOrder = async (name, number, productCart, userParam, price) => {
    setNameAdress('');
    setNumberAdress('');
    const response = await postNewOrder(name, number, productCart, userParam, price);
    return setMessage(response.data.message);
  };

  function goToProducts() {
    setTimeout(() => {
      history.push('/products');
    }, seconds);
  }

  useEffect(() => {
    setCart(getProductsLocalStorage('cart'));
  }, [newCart]);

  return (
    <Body>
      <MenuBar titleName="Finalizar Pedido" />
      {cart.length  < 1 ? <Box text="Não encontramos nada :("/>:
        <RowContainer className="bg-image box-shadow">
          <ColumnContainer>
            {cart.map(({ price = zero, productName, quantity }, index) => {
              return (
              <section className="cart-products" key={ productName }>
                <div className="cart-name" data-testid={ `${index}-product-name` }>
                  <span>Produto</span>
                  <span>{ productName }</span>
                </div>
                <div className="cart-qtd" data-testid={ `${index}-product-qtd-input` }>
                  <span>Quantidade</span>
                  <span>{ quantity }</span>
                </div>
                <div className="cart-total" data-testid={ `${index}-product-total-value` }>
                <h3>Total</h3>
                  <span>{ formatePrice(quantity * price) }</span>
                </div>
                <div className="cart-price" data-testid={ `${index}-product-unit-price` }>
                  <span>Valor unitário: { `(${formatePrice(price)} un)` }</span>
                  
                  <Button
                    type="submit"
                    value="Submit"
                    data-testid={ `${index}-removal-button` }
                    onClick={ () => removeOrder(index) }
                  >
                    Remover
                  </Button>
                </div>
              </section>
            )})}
            <div data-testid="order-total-value" className="resume">
              <span>{ `Total: ${totalPrice}` }</span>
            </div>
          </ColumnContainer>  
      <section>
       
        <TextInputContainer>
          <h2>Endereço</h2> <br />
          <label htmlFor="street">
            Rua:
            <input
              autocomplete="off"
              id="street"
              name="street"
              data-testid="checkout-street-input"
              type="text"
              required
              onChange={ (e) => setNameAdress(e.target.value) }
              value={ nameAdress }
            />
          </label>
          <br />
          <label htmlFor="number">
            Número da casa:
            <input
              autocomplete="off"
              id="number"
              name="number"
              data-testid="checkout-house-number-input"
              type="text"
              required
              onChange={ (e) => setNumberAdress(e.target.value) }
              value={ numberAdress }
            />
          </label>
          <br />
          </TextInputContainer>
          <Button
            type="button"
            data-testid="checkout-finish-btn"
            disabled={ disableButtton(justNumberPrice, nameAdress, numberAdress) }
            onClick={ () => sendNewOrder(nameAdress, numberAdress, cart, user, justNumberPrice) }
          >
            Finalizar Pedido
          </Button>
          { message && <p>{message}</p> }
          { message && goToProducts() }
      </section>
        </RowContainer>
      }
      <Footer />
    </Body>
  );
};

export default Checkout;
