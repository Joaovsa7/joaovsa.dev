import styled from 'styled-components';

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (min-width: 768px){
    min-height: 50px;
    flex-direction: row;
  }
`;

