import React from 'react';
import { HeaderContainer, MenuAndSwitchThemeWrapper } from './style';
import { Logo } from '../Logo';
import Menu from '../Menu';

const Header = () => (
  <HeaderContainer>
    <Logo />
    <Menu />
  </HeaderContainer>
);

export default Header;
