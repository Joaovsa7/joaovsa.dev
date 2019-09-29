import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Grid } from './style';
import { GlobalStyle } from '../../../globalStyle';
import Header from '../Header';

const Layout = ({ children }) =>  (
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
