import { Divider3 } from '../../components/Dividers/styles'

import { Banner } from './01-Banner'
import { About } from './02-About'
import { Skills } from './03-Skills'
import { Projects } from './04-Projects'

export function Home() {
  return (
    <>
      <Banner />
      <About />
      <Divider3 />
      <Skills />
      <Divider3 />
      <Projects />
      <Divider3 />
    </>
  )
}
