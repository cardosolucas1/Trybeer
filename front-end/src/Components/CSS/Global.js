import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-family: 'Montserrat', sans-serif;
  }

  :root {
    --text-light: white;
    --color-background: #1A423A;
    --color-background-gradient: linear-gradient(to right, #1A423A, #348A7D, #46846B);
    --color-background-button-light: #F2F2F2;
    --color-primary-light: #96D5BA;
    --color-primary: #77BEA0;
    --color-primary-dark: #46846B;
    --color-primary-darker: #348A7D;
    --color-secundary: #F2727D;
    --color-secundary-dark: #d84f5a;
    --color-title-in-primary: #F2F2F2;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #393838;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;
    --font-1: 800 2.3rem 'Open Sans', sans-serif;
    --font-2: 500 1.5rem 'Montserrat', sans-serif;
  }
  
  .box-shadow {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
    rgba(0, 0, 0, 0.12) 0px 1px 18px 0px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px;
  }

`;

/* 
  :root {
    font-size: 60%;
    --color-background: #1A423A;
    --color-background-gradient: linear-gradient(to right, #1A423A, #348A7D, #46846B);;
    --color-primary-light: #96D5BA;
    --color-primary: #77BEA0;
    --color-primary-dark: #46846B;
    --color-primary-darker: #348A7D;
    --color-secundary: #F2727D;
    --color-secundary-dark: #d84f5a;
    --color-title-in-primary: #f2f2f2;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #393838;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;
    --font-1: 800 2.3rem 'Open Sans', sans-serif;
    --font-2: 500 1.5rem 'Montserrat', sans-serif;
  } */
