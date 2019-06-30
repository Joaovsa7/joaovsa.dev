import React, { useState } from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./style"
import { GlobalStyle } from "../../../globalStyle"
import { ThemeProvider } from "styled-components"
import ThemeContext from "../Theme/ThemeContext"

// children é as divs que serão filhas desse jsx
const Layout = ({ children }) => {
  const [blackTheme, setBlackTheme] = useState(true)
  // aqui no meu layout, eu to definindo um tema default (blackTheme)
  // e a funcaoq  vai modificar o meu tema setBlackTheme
  const theme = {
    primaryColor: blackTheme ? "black" : "white",
    secondaryColor: blackTheme ? "white" : "black",
    btnColor: blackTheme ? "#E89E89" : "black",
  }

  return (
    <ThemeProvider theme={theme}>
      { /* aqui no ThemeContextProvider, ele fornece o contexto
       para o meu "estado" de contexto  e o valor é o que eu passo, meu estado
        e a funcao q vai modificar meu estado  */}
      <ThemeContext.Provider value={[blackTheme, setBlackTheme]}>
        <Wrapper>
          <GlobalStyle />
          {children}
        </Wrapper>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
