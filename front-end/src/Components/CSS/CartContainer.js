import styled from 'styled-components';

const CartContainer = styled.div`
  bottom: 100px;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  transition: opacity .3s linear;
  transition: transform .3s linear;
  position: fixed;
  right: 15px;
  height: 70px;
  background: var(--color-background);
  opacity: 0.5;
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }

`;

export default CartContainer;
