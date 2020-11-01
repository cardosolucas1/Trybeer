import styled from 'styled-components';

const RowContainer = styled.section`
  background-size: cover;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  section {
    margin: auto;
    width: 500px;
  }
`;

export default RowContainer;