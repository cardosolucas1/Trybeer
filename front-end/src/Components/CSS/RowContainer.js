import styled from 'styled-components';

const RowContainer = styled.section`
  background-size: cover;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  min-height: 800px;
  margin: auto;
  width: 100%;
  section {
    margin: auto;
    max-width: 500px;
    width: 90%;
  }
`;

export default RowContainer;