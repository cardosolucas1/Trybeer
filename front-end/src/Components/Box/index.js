import React from 'react'
import PropTypes from 'prop-types'
const BoxImage = require('../../images/box.png');

const Box = ({ text = '' }) => {
  return (
    <div>
      <h3>{text}</h3>
      <img src={BoxImage} alt="Imagem de uma caixa vazia" width="30%"/>
    </div>
  );
};

Box.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Box;