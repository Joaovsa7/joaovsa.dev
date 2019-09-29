import styled, { createGlobalStyle } from "styled-components"

// criando um css global para a aplicação 

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  button, input, select {
    outline: none;
    border: none;
  }
  p {
    color: #eee;
  }
  html {
    font-family: Montserrat;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
    overflow: hidden;
  }
`;