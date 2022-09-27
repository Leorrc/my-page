import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from '../../styles/GlobalStyles'

import { Banner } from './01-Banner'
import { About } from './02-About'

export function Home() {
  return (
    <>
      <Banner />
      <About />
      {/* <Contact /> */}
    </>
  )
}
