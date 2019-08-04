import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  transition: background-color 0.5s ease-in-out;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Grid = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 1366px) {
    max-width: 1140px;
    width: 100%;
  }
`;
