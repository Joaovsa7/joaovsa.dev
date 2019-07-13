import React, { useState, Fragment } from 'react';
import { Link } from 'gatsby';
import {
  MenuButtonContainer,
  MenuButtonLine,
  InsideMenu,
  InsideMenuContainer
} from './style';
import SwitchTheme from '../SwitchTheme';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const userAreOnIndexPage = () => {
    const actualUrl = window.location.href;
    if (actualUrl.includes('sobre')) return false;
    return true;
  };

  return (
    <>
      <MenuButtonContainer onClick={handleOpen}>
        <MenuButtonLine />
        <MenuButtonLine />
        <MenuButtonLine />
      </MenuButtonContainer>
      {open && (
        <InsideMenu>
          <InsideMenuContainer>
            <Link to={userAreOnIndexPage() ? '/sobre' : '/'}>
              {userAreOnIndexPage() ? 'Sobre' : 'Início'}{' '}
            </Link>
          </InsideMenuContainer>
          <SwitchTheme />
        </InsideMenu>
      )}
    </>
  );
};

export default Menu;
