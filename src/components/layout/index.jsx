import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';
import { GlobalStyle } from '../../../globalStyle';
import { ThemeProvider } from 'styled-components';
import ThemeContext from '../Theme/ThemeContext';

// children é as divs que serão filhas desse jsx
const Layout = ({ children }) => {
  const [themeName, setTheme] = useState('dark');
  // aqui no meu layout, eu to definindo um tema default (blackTheme)
  // e a funcaoq  vai modificar o meu tema setBlackTheme
  const theme = {
    dark: {
      primaryColor: '#000a12',
      secondaryColor: '#fff',
      btnColor: '#EDBB21'
    },
    light: {
      primaryColor: '#fff',
      secondaryColor: '#000a12',
      btnColor: '#000a12'
    }
  };

  return (
    <ThemeProvider theme={themeName === 'dark' ? theme.dark : theme.light}>
      {/* aqui no ThemeContextProvider, ele fornece o contexto
       para o meu "estado" de contexto  e o valor é o que eu passo, meu estado
        e a funcao q vai modificar meu estado  */}
      <ThemeContext.Provider value={[themeName, setTheme]}>
        <Wrapper>
          <GlobalStyle />
          {children}
        </Wrapper>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
