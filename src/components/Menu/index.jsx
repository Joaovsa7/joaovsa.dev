import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
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
            <Link to='/sobre'>
              Sobre
            </Link>
          </InsideMenuContainer>
          <SwitchTheme />
        </InsideMenu>
      )}
    </>
  );
};

export default Menu;
