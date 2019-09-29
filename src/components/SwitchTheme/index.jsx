import React, { useContext } from 'react';
import { SwitchThemeContainer, SwitchThemeCircle, SwitchThemeWrapper } from './style';


const SwitchTheme = () => {
  const themeContext = useContext(ThemeManagerContext);
  const toggleTheme = () => themeContext.toggleDark();

  return (
    <SwitchThemeWrapper>
      <SwitchThemeContainer dark={themeContext} onClick={() => toggleTheme()}>
        <SwitchThemeCircle dark={themeContext} />
      </SwitchThemeContainer>
    </SwitchThemeWrapper>
  );
};

export default SwitchTheme;
