import React from "react"
import styled from "styled-components"

const LogoStyled = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.secondaryColor};
  transition: color 0.5s ease-in-out;
`

export const Logo = () => <LogoStyled>joaovsa</LogoStyled>;
