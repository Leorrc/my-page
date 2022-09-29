import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Divider3 } from '../../components/Dividers/styles'
import { GlobalStyles } from '../../styles/GlobalStyles'

import { Banner } from './01-Banner'
import { About } from './02-About'
import { Skills } from './03-Skills'
import { Contact } from './04-Contact'

export function Home() {
  return (
    <>
      <Banner />
      <About />
      <Divider3 />
      <Skills />
      <Divider3 />
      <Contact />
    </>
  )
}
