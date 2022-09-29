import { Card } from './Card'
import { ContainerSection, ContainerMaster, Container, Text } from './styles'

export function About() {
  return (
    <>
      <ContainerSection>
        <ContainerMaster>
          <h2>Sobre mim</h2>
          <Container>
            <Text>
              <p>
                Meu nome é Leonardo e eu sou alguém fascinado por tecnologia,
                sendo formado em Ciência da Computação.
              </p>
              <p>
                Após a conclusão da graduação, tive experiências interessantes
                atuando em outras áreas além da TI, no entanto, como eu sempre
                soube, meu lugar era, realmente, na programação.
              </p>
              <p>
                Assim, retornei de vez ao universo de tecnologia e, desde então,
                tenho aprofundado meus estudos e conhecimentos na área de
                desenvolvimento voltado ao Front-End, buscando novos desafios e
                experiências nessa área pela qual tenho tanto carinho.
              </p>
            </Text>
            <Card />
          </Container>
        </ContainerMaster>
      </ContainerSection>
    </>
  )
}
