import Button from '../Button'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaWhatsapp
} from 'react-icons/fa'

import {
  ContainerL,
  ContainerM,
  DivContent,
  Content,
  IFooter,
  DivText,
  IconsLinks,
  LinkLinkedin,
  DivTextLink,
  LinkGit,
  LinkInsta,
  LinkTwitch
} from './styles'

export function Contact() {
  return (
    <>
      <ContainerL id="IdContact">
        <ContainerM>
          <DivContent>
            <Content>
              <h2>Entre em contato</h2>

              <DivText>
                <p>
                  Fique à vontade para entrar em contato se estiver procurando
                  um desenvolvedor, tiver uma pergunta ou apenas quiser se
                  conectar.
                </p>
                <Button>
                  <FaWhatsapp />
                  <a
                    href="https://api.whatsapp.com/send?phone=5547996473535&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20como%20funciona%20os%20atendimentos%20e%20tirar%20d%C3%BAvidas.%20Fico%20no%20aguardo."
                    target="_blank"
                    rel="noreferrer"
                  >
                    Entre em contato
                  </a>
                </Button>
              </DivText>
              <h3>Redes Sociais</h3>

              <IconsLinks>
                <LinkLinkedin>
                  <FaLinkedin />
                  <DivTextLink>
                    <strong>Linkedin</strong>
                    <a
                      href="https://www.linkedin.com/in/leonardo-carvalho-756847239/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Meu Perfil
                    </a>
                  </DivTextLink>
                </LinkLinkedin>

                <LinkGit>
                  <FaGithub />
                  <DivTextLink>
                    <strong>Github</strong>
                    <a
                      href="https://github.com/Leorrc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Meu Perfil
                    </a>
                  </DivTextLink>
                </LinkGit>

                <LinkInsta>
                  <FaInstagram />
                  <DivTextLink>
                    <strong>Instagram</strong>
                    <a
                      href="https://www.instagram.com/leo.rrc/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Meu Perfil
                    </a>
                  </DivTextLink>
                </LinkInsta>

                <LinkTwitch>
                  <FaTwitch />
                  <DivTextLink>
                    <strong>Twitch</strong>
                    <a
                      href="https://www.twitch.tv/leozz_fps"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Meu Perfil
                    </a>
                  </DivTextLink>
                </LinkTwitch>
              </IconsLinks>
            </Content>
          </DivContent>
        </ContainerM>
      </ContainerL>

      <IFooter>
        <span>Design e Desenvolvimento por</span>
        <br />
        <strong>Leonardo Carvalho</strong> <span>2022</span>
      </IFooter>
    </>
  )
}
