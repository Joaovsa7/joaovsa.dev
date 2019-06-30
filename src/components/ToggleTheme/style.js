import styled from "styled-components"

export const Button = styled.button`
  max-width: 250px;
  width: 100%;
  min-height: 50px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.btnColor && theme.btnColor};
  color: white;
  cursor: pointer;
`;
