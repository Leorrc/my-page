import { useLocation } from 'react-router-dom'
import logo from '../../../images/logo1.svg'

import { FaBars } from 'react-icons/fa'
import {
  ContainerHeader,
  Nav,
  Menu,
  MobileIcon,
  Item,
  ItemLink,
  LogoA
} from './styles'

type Props = {
  toggle1: () => void
}

export function NavBar({ toggle1 }: Props) {
  const { pathname } = useLocation()

  return (
    <>
      <ContainerHeader>
        <Nav>
          <LogoA to="/">
            <img src={logo} />
          </LogoA>
          <MobileIcon onClick={toggle1}>
            <FaBars />
          </MobileIcon>
          <Menu>
            <Item>
              <ItemLink to="/">Portfolio</ItemLink>
            </Item>
            <Item>
              <ItemLink to="/">Sobre mim</ItemLink>
            </Item>
            <Item>
              <ItemLink to="/affiliates">Contato</ItemLink>
            </Item>
          </Menu>
        </Nav>
      </ContainerHeader>
    </>
  )
}
