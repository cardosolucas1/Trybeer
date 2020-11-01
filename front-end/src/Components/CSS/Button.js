import styled from 'styled-components';

const Button = styled.button`
  background: var(--color-background);
  color: var(--text-light);
  cursor: pointer;
  border-radius: 5px;
  font-weight: 700;
  margin: 5px;
  outline: none;
  padding: 10px 20px;
  transition: opacity .3s linear;
  transition: transform .3s linear;
  &:hover {
    background: var( --color-background-button-light);
    color: var(--color-background);
  } 

  &:active {
    transform: scale(0.95);
  } 
`;

export default Button;
