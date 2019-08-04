import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { MenuButtonContainer, MenuButtonLine, InsideMenu, InsideMenuContainer } from './style';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import SwitchTheme from '../SwitchTheme';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <>
      <MenuButtonContainer onClick={handleOpen}>
        <MenuButtonLine />
        <MenuButtonLine />
        <MenuButtonLine />
      </MenuButtonContainer>
      {open && (
        <InsideMenu ref={ref}>
          <InsideMenuContainer>
            <Link to='/sobre'>Sobre</Link>
          </InsideMenuContainer>
          <SwitchTheme />
        </InsideMenu>
      )}
    </>
  );
};

export default Menu;
