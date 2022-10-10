import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/01-Header'
import { Contact } from './components/02-Footer'
import ScrollTop from './components/ScrollTop'
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
        {/* <Route path="/events" element={<Events />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/leitura" element={<Leitura />} /> */}
      </Routes>
      <Contact />
    </Router>
  )
}

export default App
