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
    position: relative;
  }

  img {
    width: 70%;
    max-width: 700px;
    opacity: 0.9;
    top: 50px;
    position: relative;
  }

  div {
    margin: 10px;
  }
  div > p {
    cursor: pointer;
    margin: 5px 0;
  }
`;

export default FooterStyled;
