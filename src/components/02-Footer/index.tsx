import Button from '../Button'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaWhatsapp
} from 'react-icons/fa'

import { HiOutlineMail } from 'react-icons/hi'
import {
  ContainerSection,
  Container,
  Zap,
  IFooter,
  Socials,
  Social,
  Email
} from './styles'
import { Line } from '../../pages/01-Home/01-Banner/styles'

export function Contact() {
  return (
    <>
      <ContainerSection>
        <Container>
          <Zap>
            <h2>Entre em contato</h2>
            <p>
              Fique à vontade para entrar em contato se estiver procurando um
              desenvolvedor, tiver uma pergunta ou apenas quiser se conectar.
            </p>
            <Button>
              <FaWhatsapp />
              <a
                href="https://api.whatsapp.com/send?phone=5547996473535&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20como%20funciona%20os%20atendimentos%20e%20tirar%20d%C3%BAvidas.%20Fico%20no%20aguardo."
                target="_blank"
              >
                Entre em contato
              </a>
            </Button>
            <Email>
              <HiOutlineMail />
              <a
                href="mailto:leorrc1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                leorrc1@gmail.com
              </a>
            </Email>
          </Zap>
          <Socials>
            <h3>Redes Sociais</h3>
            <Line />
            <Social>
              <div>
                <a href="">
                  <FaLinkedin />
                </a>
              </div>
              <div>
                <a href="">
                  <FaGithub />
                </a>
              </div>
              <div>
                <a href="">
                  <FaInstagram />
                </a>
              </div>
              <div>
                <a href="">
                  <FaTwitch />
                </a>
              </div>
            </Social>
          </Socials>
        </Container>
      </ContainerSection>
      <IFooter>
        <span>Design e Desenvolvimento por</span>
        <br />
        <strong>Leonardo Carvalho</strong> <span>2022</span>
      </IFooter>
    </>
  )
}
