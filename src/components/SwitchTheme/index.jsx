import React, { useContext, useState, useEffect } from 'react';
import {
  SwitchThemeContainer,
  SwitchThemeCircle,
  SwitchThemeWrapper
} from './style';
import ThemeContext from '../Theme/ThemeContext';

const SwitchTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [toolTip, showToolTip] = useState(false);

  const actualTheme = localStorage.getItem('theme');

  const onToggleTheme = () => {
    if (actualTheme == 'light') {
      setTheme('dark')
      return localStorage.setItem('theme', 'dark');
    }
    if (actualTheme == 'dark') {
      setTheme('light')
      return localStorage.setItem('theme', 'light');
    }
  };

  return (
    <SwitchThemeWrapper>
      <SwitchThemeContainer
        themeName={actualTheme}
        onMouseEnter={() => showToolTip(!toolTip)}
        onMouseLeave={() => showToolTip(!toolTip)}
        onClick={() => onToggleTheme()}
      >
        <SwitchThemeCircle themeName={actualTheme} />
      </SwitchThemeContainer>
    </SwitchThemeWrapper>
  );
};

export default SwitchTheme;
