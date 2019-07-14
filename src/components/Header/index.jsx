import React from 'react';
import { HeaderContainer } from './style';
import { Logo } from '../Logo';
import Menu from '../Menu';

const Header = () => (
  <HeaderContainer>
    <Logo />
    <Menu />
  </HeaderContainer>
);

export default Header;
