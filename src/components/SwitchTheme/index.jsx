import React, { useContext } from 'react';
import { SwitchThemeContainer, SwitchThemeCircle, SwitchThemeWrapper } from './style';
import ThemeContext from '../Theme/ThemeContext';

const SwitchTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const actualTheme = localStorage.getItem('theme') || theme;

  const onToggleTheme = () => {
    if (actualTheme === 'light') {
      setTheme('dark');
      return localStorage.setItem('theme', 'dark');
    }
      setTheme('light');
      return localStorage.setItem('theme', 'light');
  };

  return (
    <SwitchThemeWrapper>
      <SwitchThemeContainer themeName={actualTheme} onClick={onToggleTheme}>
        <SwitchThemeCircle themeName={actualTheme} />
      </SwitchThemeContainer>
    </SwitchThemeWrapper>
  );
};

export default SwitchTheme;
