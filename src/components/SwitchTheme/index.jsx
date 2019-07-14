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

  const onToggleTheme = () => {
    console.log(theme)
    const actualTheme = localStorage.getItem('theme');
    if (actualTheme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <SwitchThemeWrapper>
      <SwitchThemeContainer
        themeName={theme}
        onMouseEnter={() => showToolTip(!toolTip)}
        onMouseLeave={() => showToolTip(!toolTip)}
        onClick={() => onToggleTheme()}
      >
        <SwitchThemeCircle themeName={theme} />
      </SwitchThemeContainer>
    </SwitchThemeWrapper>
  );
};

export default SwitchTheme;
