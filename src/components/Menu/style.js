import styled from 'styled-components';

export const MenuButtonContainer = styled.div`
  max-width: 40px;
  min-width: 40px;
  max-height: 40px;
  min-height: 40px;
  background-color: #eee;
  border-radius: 100px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

export const MenuButtonLine = styled.div`
  height: 2px;
  width: 50%;
  background-color: #000a12;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 4px 0px;
  }
`;

export const InsideMenu = styled.nav`
  position: absolute;
  top: 60px;
  max-width: 170px;
  width: 100%;
  border-radius: 4px;
  background-color: #eee;
  right: 0;
`;

export const InsideMenuContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  > a {
    color: #000a12;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: bold;
    &:not(:last-child){
      margin-bottom: 10px;
    }
  }
`;

