import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/01-Header'
import { Contact } from './components/02-Footer'

import ScrollToTopButton from './components/ScrollTopButton'
import { Home } from './pages/01-Home'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTopButton />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Contact />
    </Router>
  )
}

export default App
