import styled from 'styled-components';


const SectionInput = styled.section.attrs({ className: 'box-shadow' })`
  background-image: var(--color-background-gradient);
  color: var(--text-light);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 100px 50px;
  text-align: left;
  width: 80%;
  max-width: 500px;
  input {
    background-color: var(--text-light);
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    width: 100%;
  }

  input:focus {
    outline: 0;
  }

  label { 
    font-weight: 700;
  }

  button {
    min-width: 150px;
    width: 30%;
  }

  h4 {
    color: var(--color-secundary);
    text-align: center;
  }
  @media (min-width: 428px) {
    button:nth-child(1) {
      display: none;
    }
  }

`;

export default SectionInput;