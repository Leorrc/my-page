import { FaBars } from 'react-icons/fa'
import {
  ContainerHeader,
  Nav,
  Menu,
  MobileIcon,
  Item,
  ItemLink,
  LogoA,
  ItemScroll
} from './styles'

import logo from '../../../images/logo1.svg'

type Props = {
  toggle1: () => void
}

export function NavBar({ toggle1 }: Props) {
  return (
    <>
      <ContainerHeader>
        <Nav>
          <LogoA to="hometop">
            <img src={logo} alt="Logo" />
          </LogoA>
          <MobileIcon onClick={toggle1}>
            <FaBars />
          </MobileIcon>

          <Menu>
            <ItemLink to="IdProject">
              <Item>
                <ItemScroll>Portfólio</ItemScroll>
              </Item>
            </ItemLink>
            <ItemLink to="IdAbout">
              <Item>
                <ItemScroll>Sobre mim</ItemScroll>
              </Item>
            </ItemLink>
            <ItemLink to="IdSkill">
              <Item>
                <ItemScroll>Habilidades</ItemScroll>
              </Item>
            </ItemLink>
            <ItemLink to="IdContact">
              <Item>
                <ItemScroll>Contato</ItemScroll>
              </Item>
            </ItemLink>
          </Menu>
        </Nav>
      </ContainerHeader>
    </>
  )
}
