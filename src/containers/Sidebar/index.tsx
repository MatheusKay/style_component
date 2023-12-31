import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Title"

import { BotaoTema, Descricao, SidebarContainer } from "./styles"

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Matheus Kayque</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>MatheusKay</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Engenheiro Front-End</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
