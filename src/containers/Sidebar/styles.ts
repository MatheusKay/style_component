import styled from "styled-components"
import { P } from "../../components/Paragrafo/styles"

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  padding: 8px;
  font-size: 10px;
  font-weight: bold;
  color: #EEE;
  background-color: #242a35;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
