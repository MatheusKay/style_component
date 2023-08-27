/* eslint-disable jsx-a11y/alt-text */
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Title";
import { GitStatus } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestiae corporis architecto? Autem unde sed facilis quam quae assumenda nisi natus voluptates reprehenderit, neque mollitia. Eligendi quidem quod debitis quam?
    </Paragrafo>
    <GitStatus>
      <img src="https://github-readme-stats.vercel.app/api?username=MatheusKay&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MatheusKay&layout=compact&langs_count=7&theme=dracula"/>
    </GitStatus>
  </section>
)

export default Sobre
