import { FaFolderOpen } from 'react-icons/fa'
import {
  ContainerSection,
  Container,
  Line,
  Divider,
  DivRow,
  Card
} from './styles'

export function About() {
  return (
    <>
      <ContainerSection>
        <Container>
          <h2>Portfólio</h2>
          <Divider>
            <Line />
            <i>
              <FaFolderOpen />
            </i>
            <Line />
          </Divider>
          <DivRow>
            <Card />
            <Card />
            <Card />
          </DivRow>
        </Container>
      </ContainerSection>
    </>
  )
}
