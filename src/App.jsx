import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './index.css'
import MenikmatiKopi from './pages/Blog/MenikmatiKopi'
import ReviewKeyboard from './pages/Blog/ReviewKeyboard'
import TipsProgramming from './pages/Blog/TipsProgramming'
import TentangPage from './pages/TentangPage'
import PortfolioPage from './pages/PortfolioPage'
import ClientsPage from './pages/ClientsPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'




function App() {
  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/tips' Component={TipsProgramming} />
        <Route path='/review' Component={ReviewKeyboard} />
        <Route path='/kopi' Component={MenikmatiKopi} />
        <Route path='/tentang' Component={TentangPage} />
        <Route path='/portfolio' Component={PortfolioPage} />
        <Route path='/clients' Component={ClientsPage} />
        <Route path='/blog' Component={BlogPage} />
        <Route path='/contact' Component={ContactPage} />
      </Routes>

      <FooterComponent />
    </>
  )
}

export default App
