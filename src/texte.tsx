import styled from 'styled-components'

//Botões não tem propriedades por isso criamos no mesmo.

type BotaoProps = {
  principal: boolean
  fontSize?: string   //Se nao colocarmos o "?" no final da propriedade vai fazer essa propriedade ser obrigatoria ou seja é imposivel criar o componente sem colocar essa propriedade
}

//Agora criamos o componente para o botão.

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => props.principal ? 'green' : 'blue'};
  font-size: ${(props) => props.fontSize || '16px'};
`

//Podemos criar componentes de componentes

const BotaoDiferente = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Test() {
  return (
    <div>
      <Botao principal fontSize="16px">Enviar</Botao>
      <Botao fontSize="14px" principal={false}>Cancelar</Botao>
      <BotaoDiferente principal>Nao click aqui</BotaoDiferente>

      {/* Se utilizarmos a diretiva "as?" podemos tranforma o botão em outra tag do Html */}

      <BotaoDiferente as = "a" principal = {false}>Nao click</BotaoDiferente>

      {/* Esse botao agora é um link e ainda utiliza o Css feito para o botão */}
      {/* Podemos estilizar os componentes igual fazemos com o SASS ou LESS */}

      <BotaoDiferente principal = {false}>
        <span>Nao clique</span>
      </BotaoDiferente>

      {/* Se repara no Css feito para o "BotaoDiferente" a forma como estilizamos o "span" foi dentro das chaves assim como no SASS. */}

    </div>
  )
}


export default Test
