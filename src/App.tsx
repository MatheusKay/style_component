import Projetos from "./containers/Projetos"
import Sidebar from "./containers/Sidebar"
import Sobre from "./containers/Sobre"
import EstiloGlobal, { Container } from "./style"

function App() {
  return (
    <>
      <EstiloGlobal /> {/* Essa tag tem o Reset do site com o estilo global para todo o site.*/}
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
