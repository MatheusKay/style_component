import styled from "styled-components"

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`
export const LinkBotao = styled.a`
  display: inline-block;
  margin-top: 24px;
  padding: 8px;
  text-decoration: none;
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corDeFundoBotao};
`
