import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  min-height: 10%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    min-height: 5%;
    margin-top: 10px;
  }
`;

export const MenuAndSwitchThemeWrapper = styled.div`
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
