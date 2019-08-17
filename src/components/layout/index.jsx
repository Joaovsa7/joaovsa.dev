import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Grid } from './style';
import { GlobalStyle } from '../../../globalStyle';
import Header from '../Header';
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const Layout = ({ children }) => {

  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Grid>
          <Header />
          {children}
        </Grid>
      </Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
