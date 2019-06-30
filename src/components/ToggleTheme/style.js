import styled from "styled-components"

export const Button = styled.button`
  max-width: 250px;
  width: 100%;
  min-height: 50px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.btnColor};
  transition: background-color 0.5s ease-in-out;
  color: white;
  cursor: pointer;
`;
