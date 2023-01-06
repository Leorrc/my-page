import { ContainerSection, Container, Content } from './styles'
import { Tecs } from './tecs'

export function Skills() {
  return (
    <>
      <ContainerSection id="IdSkill">
        <Container
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h2>Minhas Habilidades</h2>
          <Content>
            <p>
              Através dos meus estudos, pude desenvolver um sólido repertório de
              habilidades e conceitos relacionados à Ciência da Computação e
              desenvolvimento Web.
            </p>
            <p>
              Desde então, dedico muito do meu tempo livre pesquisando e criando
              novos projetos que me ajudem a aprimorar meus conhecimentos na
              utilização desses conceitos, bem como minhas habilidades como
              desenvolvedor, visando criar melhores soluções e experiências.
            </p>
            <Tecs />
          </Content>
        </Container>
      </ContainerSection>
    </>
  )
}
