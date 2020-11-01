import styled from 'styled-components';
import TrybeerBg from '../../images/trybeer-bg.png';

const Body = styled.section`
  .bg-image {
    background-image: url(${TrybeerBg});
  }
  background-color: var(--color-background-button-light);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default Body;