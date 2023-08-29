import { ThemeProvider } from "styled-components"

import Projetos from "./containers/Projetos"
import Sidebar from "./containers/Sidebar"
import { useState } from 'react'

import Sobre from "./containers/Sobre"
import EstiloGlobal, { Container } from "./style"
import TemaLight from "./themes/light"
import TemaDark from "./themes/dark"

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? TemaDark : TemaLight}>
      <EstiloGlobal /> {/* Essa tag tem o Reset do site com o estilo global para todo o site.*/}
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
