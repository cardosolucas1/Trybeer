import styled from 'styled-components';

const FooterStyled = styled.footer`
  margin-top: 20px;
  width: 100%;
  section {
    align-content: center;
    background-image: var( --color-background-gradient);
    color: #f2f2f2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 100px;
  }

  img {
    animation: showFriends 0.7s ease-in-out forwards;
    animation-delay: 1.5s;
    width: 70%;
    max-width: 700px;
    margin-left: 100%;
    opacity: 0;
  }

  div > p {
    cursor: pointer;
  
  }

  @keyframes showFriends {
    0% {
      margin-left: 100%;
      opacity: 0;
    }

    90% {
      margin-left: 0;
      opacity: 1;
    }

    100% {
      border-radius: 10% 10% 0 0;
      margin-left: 0;
      opacity: 0.9;
    }
  }
`;

export default FooterStyled;
