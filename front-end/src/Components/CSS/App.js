import styled from 'styled-components';

const AppImg = styled.img`
  animation: showApp 0.7s 0.3s ease-in-out forwards;
  margin-top: 100px;
  opacity: 0;

  @keyframes showApp {
    from {
      margin-top: 100px;
      opacity: 0;
    }

    to {
      margin-top: 2%;
      opacity: 1;
    }
  }
`;

export default AppImg;