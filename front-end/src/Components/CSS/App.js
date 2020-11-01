import styled from 'styled-components';

const AppImg = styled.img`
  animation: showApp 0.7s 0.7s ease-in-out forwards;
  margin-top: 150px;
  opacity: 0;

  @keyframes showApp {
    from {
      margin-top: 150px;
      opacity: 0;
    }

    to {
      margin-top: 10px;
      opacity: 1;
    }
  }
`;

export default AppImg;