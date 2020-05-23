import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Grid } from "./style";
import GlobalStyle from "../../../globalStyle";
const Layout = ({ children }) => (
  <>
    <Wrapper>
      <GlobalStyle />
      <Grid>{children}</Grid>
    </Wrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
