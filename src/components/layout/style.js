import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme.primaryColor};
    transition: background-color 0.5s ease-in-out;
`;
