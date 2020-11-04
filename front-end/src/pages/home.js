import React from 'react';
import Body from '../Components/CSS/Body';
import Header from '../Components/Header';
import AppImg from '../Components/CSS/App';
import RowContainer from '../Components/CSS/RowContainer';
import ButtonAnimated from '../Components/CSS/ButtonAnimated';
import Footer from '../Components/Footer';
import { GrAndroid, GrApple } from "react-icons/gr";

const app = require ('../images/trybeer.png');

const home = () => {
  return (
    <Body>
      <Header
        title="TryBeer"
        buttons={[{ name: 'Login', link: '/login'}, { name: 'Cadastro', link: '/register'}]}
      />
      <RowContainer className="bg-image box-shadow">
        <section>
          <AppImg src={app} width="70%"/>
        </section>
        <section>
          <ButtonAnimated>Grátis para Android <GrAndroid size={30}/></ButtonAnimated>
          <ButtonAnimated>Grátis para IOS <GrApple size={30}/></ButtonAnimated>
        </section>
      </RowContainer>
      <Footer />
    </Body>
  );
}

export default home;
