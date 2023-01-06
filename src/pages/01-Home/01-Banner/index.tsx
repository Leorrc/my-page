import img from '../../../images/1.png'

import { ContainerSection, Container, Text, Line, Img } from './styles'

export function Banner() {
  return (
    <>
      <ContainerSection id="hometop">
        <Container>
          <Img src={img} />
          <Text>
            <span>Oi, eu sou</span>
            <h1>Leonardo Carvalho</h1>
            <strong>Desenvolvedor FULL-STACK</strong>
            <Line />
          </Text>
        </Container>
      </ContainerSection>
    </>
  )
}
