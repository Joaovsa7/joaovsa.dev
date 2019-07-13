import React from "react"
import styled from "styled-components"

const LogoStyled = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.primaryColor};
  transition: color 0.5s ease-in-out;
`

export const Logo = () => <LogoStyled>joaovsa</LogoStyled>;
