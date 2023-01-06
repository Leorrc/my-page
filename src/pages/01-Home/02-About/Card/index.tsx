import avatar from '../../../../images/avatar1.svg'

import { CardDefault, Img, Name } from './styles'

export function Card() {
  return (
    <CardDefault>
      <Img src={avatar} />
      <Name>
        <h3>Leonardo Carvalho</h3>
        <h4>Desenvolvedor </h4>
        <h4>Full-Stack</h4>
      </Name>
    </CardDefault>
  )
}
