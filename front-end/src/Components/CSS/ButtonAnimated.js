import styled from 'styled-components';

const Button = styled.button`
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  height: 70px;
  width: 90%;
  max-width: 350px;
  border: none;
  background-image: var(--color-background-gradient);
  box-shadow: 0 0 0 0 var(--color-background);
  border-radius: 20px;
  background-size:cover;
  background-repeat: no-repeat;
  color: var(--text-light);
  cursor: pointer;
  font-weight: 700;
  font-size: large;
  margin: 20px 0;
  position: relative;
  &:hover 
  {
    animation: none
  }
  @keyframes pulse {
    to {
      box-shadow: 0 0 0 10px rgba(232, 76, 61, 0);
    }
  }

  svg { 
    position: absolute;
    right: 20px;
    top: 20px;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;