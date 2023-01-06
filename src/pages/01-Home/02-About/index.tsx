import { Card } from './Card'
import { ContainerSection, ContainerMaster, Container, Text } from './styles'

export function About() {
  return (
    <>
      <ContainerSection id="IdAbout">
        <ContainerMaster
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h2>Sobre mim</h2>
          <Container>
            <Text>
              <p>
                Meu nome é Leonardo e eu sou extremamente fascinado por
                tecnologia, sendo estudante em Ciência da Computação.
              </p>
              <p>
                Após um período sabático da faculdade, tive experiências
                interessantes atuando em outras áreas além da TI, no entanto,
                como eu sempre soube, meu lugar é na programação.
              </p>
              <p>
                Assim, retornei de vez ao universo de tecnologia e, desde então,
                tenho aprofundado meus estudos e conhecimentos na área de
                desenvolvimento voltado ao Front-End.
              </p>
              <p>
                Como forma de continuar me especializando, decidi seguir um novo
                rumo no Back-End que pode me abrir perspectivas e conhecimentos
                diferenciados.
              </p>
            </Text>
            <Card />
          </Container>
        </ContainerMaster>
      </ContainerSection>
    </>
  )
}
