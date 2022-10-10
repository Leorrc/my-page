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
            <SidebarRoute onClick={toggle} to="IdProject">
              PORTFÓLIO
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="IdAbout">
              SOBRE MIM
            </SidebarRoute>
            <SidebarRoute onClick={toggle} to="IdContact">
              CONTATO
            </SidebarRoute>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}
