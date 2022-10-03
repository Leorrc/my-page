import { CardDefault, MemberInfos, Img, DivButtons, Buttons } from './styles'

import { MdAdsClick } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

interface MemberProps {
  imgUrl?: string
  name?: string
  description?: string
}

export function CardProjects({ imgUrl, name, description }: MemberProps) {
  return (
    <CardDefault>
      <Img>
        <img src={imgUrl} />
      </Img>
      <MemberInfos>
        <h4>{name}</h4>
        <p>{description}</p>
      </MemberInfos>
      <DivButtons>
        <Buttons>
          <MdAdsClick />
          <a href="">Projeto ao vivo</a>
        </Buttons>
        <Buttons>
          <FaGithub />
          <a href="">Repositório</a>
        </Buttons>
      </DivButtons>
    </CardDefault>
  )
}
