import styled from 'styled-components';

const StyledHeader = styled.header.attrs({ className: 'box-shadow' })`
  align-items: center;
  background: var(--text-light);
  color: var(--color-primary);
  display: flex;
  height: 70px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 20px;

  h1 {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 428px) {
    div button:nth-child(2) {
      display: none;
    }
  }

`;

export default StyledHeader;