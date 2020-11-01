import React from 'react';
import CartContainer from '../CSS/CartContainer';
const CartIcon = require('../../images/cart.png');

const Cart = () => (
  <CartContainer>
    <img src={CartIcon} alt="Ícone de um carrinho de compras" width="70px"/>
  </CartContainer>
);

export default Cart;
