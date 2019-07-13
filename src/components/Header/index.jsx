import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer } from './style';

const Header = ({ children }) => <HeaderContainer>{children}</HeaderContainer>;

Header.propTypes = {
  children: PropTypes.node.isRequired
}
export default Header;
