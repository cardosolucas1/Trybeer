import styled from 'styled-components';

const ColumnContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 400px;
  color: var(--text-light);
  .resume {
    position: relative;

  }
  
  section {
    align-self: center;
    background-color: #044A42;
    border-radius: 4px;
    
    margin: 5px 0;
    max-width: 900px;
    padding: 10px;
    text-align: start;
    width: 90%;
    div {
      display: flex;
      justify-content: space-between;
      span {
        align-self: center;
        position: relative;
        margin: 5px 0;
        text-align: center;
        font-weight: 700;
      }
    }
  }
`;

export default ColumnContainer;