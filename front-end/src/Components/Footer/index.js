import React from 'react';
// import './styles.css';
import FooterStyled from '../CSS/Footer';
import friends from '../../images/friends.svg';

const Footer = () => (
    
  <FooterStyled className="footer-container">
    <img src={friends}/>
    <section>
    <div>
        <h4>Desenvolvido por:</h4>
        <p>André Palhares</p>
        <p>Lucas Cardoso</p>
        <p>Luís Eduardo</p>
        <p>Roberto Assis</p>
      </div>
      <div>
        <h4>Tecnologias utilizadas</h4>
        <p>ReactJs</p>
        <p>NodeJs</p>
        <p>Express</p>
        <p>MySQL</p>
      </div>
      <div>
        <h4>Links úteis</h4>
        <p>Ajuda</p>
        <p>Central de atendimento</p>
        <p>Faça um pedido</p>
        <p>Trabalhe conosco</p>
      </div>
    </section>
  </FooterStyled>
);

export default Footer;
