import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledHeader from '../CSS/Header';
import Button from '../CSS/Button';

const Header = ({ title, buttons }) => {
  const history = useHistory();
  const handleButtonClick = (link) => {
    history.push(link)
  }
  return (  
    <StyledHeader>
      <h1>{title}</h1>
      <div>
        {buttons.map(({ name, link }, index) => 
          <Button onClick={() => handleButtonClick(link)}key={index}>{name}</Button>
        )}
      </div>
     
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;