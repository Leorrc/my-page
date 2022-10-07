import { Card, Infos, Img, DivButtons, AButton, DivImg } from './styles'

import { MdAdsClick } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

interface SocialMedia {
  network: string
  link: string
}

const renderSwitch = (network: string) => {
  switch (network) {
    case 'site':
      return (
        <>
          <MdAdsClick />
          Projeto ao vivo
        </>
      )

    case 'git':
      return (
        <>
          <FaGithub />
          Repositório
        </>
      )
  }
}
interface MemberProps {
  imgUrl?: string
  name?: string
  description?: string
  socialList: SocialMedia[]
}

export function CardProjects({
  imgUrl,
  name,
  description,
  socialList
}: MemberProps) {
  return (
    <Card>
      <DivImg>
        <Img>
          <img src={imgUrl} />
        </Img>
      </DivImg>

      <Infos>
        <h3>{name}</h3>
        <p>{description}</p>

        <DivButtons>
          {socialList.map(social => (
            <AButton href={social.link} target="_blank">
              {renderSwitch(social.network)}
            </AButton>
          ))}
        </DivButtons>
      </Infos>
    </Card>
  )
}
