import styled from 'styled-components';

const SlideContainer =  styled.div.attrs({ className: 'box-shadow' })`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 700px;
  margin-bottom: 50px;

  @media (max-width: 2000px) {
    height: 500px;
  }

  @media (max-width: 900px) {
    height: 200px;
  }

  @media (max-width: 800px) {
    height: 200px;
  }

  @media (max-width: 400px) {
    height: 150px;
  }
`;

export default SlideContainer;