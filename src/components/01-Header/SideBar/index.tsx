import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarScroll,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper
} from './styles'

type Props = {
  isOpen: boolean
  toggle: () => void
}

export function SideBar({ isOpen, toggle }: Props) {
  return (
    <>
      <SidebarContainer
        isOpen={isOpen}
        onClick={() => {
          isOpen && toggle()
        }}
      >
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarRoute onClick={toggle} to="/">
              Home
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="/">
              PORTFÓLIO
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="/">
              SOBRE MIM
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="/">
              CONTATO
            </SidebarRoute>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}
