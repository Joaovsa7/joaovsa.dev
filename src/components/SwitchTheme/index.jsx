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
    </SwitchThemeWrapper>
  );
};

export default SwitchTheme;
