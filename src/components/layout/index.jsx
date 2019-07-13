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
      backgroundColor: '#000a12',
      primaryColor: '#eee',
      yellow: '#f9a825',
      darkBlue: '#004ba0',
      blue: '#488DE8',
      red: '#b71c1c',
      yellow: '#F7FF82',
      gray: '#757575'
    },

    light: {
      backgroundColor: '#fff',
      primaryColor: '#000a12',
      yellow: '#ece071',
      blue: '#488DE8',
      red: '#e67b59',
      gray: '#1f1f1f'
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
