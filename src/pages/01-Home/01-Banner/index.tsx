import img from '../../../images/1.png'
import { Tecs } from './tecs'

import { ContainerSection, Container, Line } from './styles'

export function Banner() {
  return (
    <>
      <ContainerSection>
        <Container>
          <img src={img} />
          <span>Oi, eu sou</span>
          <h1>Leonardo Carvalho</h1>
          <p>Desenvolvedor Front-End</p>
          <Tecs />
          <Line />
        </Container>
      </ContainerSection>
    </>
  )
}
