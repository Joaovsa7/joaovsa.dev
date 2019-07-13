import React, { useContext, useState } from 'react';
import {
  SwitchThemeContainer,
  SwitchThemeCircle,
  SwitchThemeToolTip,
  SwitchThemeWrapper
} from './style';
import ThemeContext from '../Theme/ThemeContext';

const SwitchTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [toolTip, showToolTip] = useState(false);

  return (
    <SwitchThemeWrapper>
      <SwitchThemeContainer
        themeName={theme}
        onMouseEnter={() => showToolTip(!toolTip)}
        onMouseLeave={() => showToolTip(!toolTip)}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <SwitchThemeCircle themeName={theme} />
      </SwitchThemeContainer>
      {toolTip && (
        <SwitchThemeToolTip themeName={theme}>
          {' '}
          Você está usando o tema {theme}, <br /> clique para mudar para o tema{' '}
          {theme === 'light' ? 'dark' : 'light'}
        </SwitchThemeToolTip>
      )}
    </SwitchThemeWrapper>
  );
};

export default SwitchTheme;
