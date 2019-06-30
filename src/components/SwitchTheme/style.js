import styled from 'styled-components';

export const SwitchThemeWrapper = styled.div`
  position: relative;
  max-width: 250px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SwitchThemeContainer = styled.div`
  max-width: 50px;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 100px;
  min-height: 25px;
  max-height: 25px;
  display: flex;
  align-items: center;
  transition: background-color 0.5s ease-in-out;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0.1);
`;

export const SwitchThemeCircle = styled.div`
  min-height: 20px;
  max-height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  position: absolute;
  left: ${({ themeName }) => (themeName === 'dark' ? '5px' : '25px')};
  border-radius: 100px;
  transition: background-color 0.5s linear;
  transition: left 0.5s linear;
`;

export const SwitchThemeToolTip = styled.p`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 4px;
  top: 40px;
  text-align: center;
  color: ${({ themeName }) => (themeName === 'dark' ? 'black' : 'white')};
  font-weight: bold;
  font-size: 0.7rem;
  padding: 5px;
`;
