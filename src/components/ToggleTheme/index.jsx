import React, { useContext,  useState } from "react"
import ThemeContext from "../Theme/ThemeContext"
import { Button } from "./style"

const ToggleButon = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  return (
        <Button onClick={() => setTheme(!theme)}> Mudar as cores </Button>
  )
}

export default ToggleButon
