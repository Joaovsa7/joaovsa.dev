import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Grid } from './style';
import { GlobalStyle } from '../../../globalStyle';
import { ThemeProvider } from 'styled-components';
import ThemeContext from '../Theme/ThemeContext.jsx';
import Header from '../Header';

// children é as divs que serão filhas desse jsx
const Layout = ({ children }) => {
  const [themeName, setThemeName] = useState(null);
  // aqui no meu layout, eu to definindo um tema default (blackTheme)
  // e a funcaoq  vai modificar o meu tema setBlackTheme
  const theme = {
    dark: {
      backgroundColor: '#000a12',
      primaryColor: '#eee',
      darkBlue: '#004ba0',
      blue: '#488DE8',
      red: '#b71c1c',
      yellow: '#F7FF82',
      gray: '#757575'
    },

    light: {
      backgroundColor: '#fff',
      primaryColor: '#000a12',
      blue: '#488DE8',
      red: '#e67b59',
      gray: '#1f1f1f',
      yellow: '#ece071'
    }
  };

  const getThemeInLocalStorage = () => {
    const actualTheme = localStorage.getItem('theme');
    if(!actualTheme) return theme.light;
    if (actualTheme === 'light') return theme.light;
    if (actualTheme === 'dark') return theme.dark;
  };

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const defaultTheme = localStorage.setItem('theme', 'light');
      setThemeName(defaultTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={getThemeInLocalStorage}>
      <ThemeContext.Provider value={[themeName, setThemeName]}>
        <Wrapper>
          <GlobalStyle />
          <Grid>
            <Header />
            {children}
          </Grid>
        </Wrapper>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
