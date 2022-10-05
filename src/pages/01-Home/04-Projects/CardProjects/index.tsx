import { CardDefault, MemberInfos, Img, DivButtons, Button } from './styles'

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
    <CardDefault>
      <Img src={imgUrl} />

      <MemberInfos>
        <h3>{name}</h3>
        <p>{description}</p>

        <DivButtons>
          {socialList.map(social => (
            <Button>
              <a href={social.link} target="_blank">
                {renderSwitch(social.network)}
              </a>
            </Button>
          ))}
        </DivButtons>
      </MemberInfos>
    </CardDefault>
  )
}
