import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Ecosystem from './pages/Ecosystem'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/he-sinh-thai" element={<Ecosystem />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
          <Route path="/tuyen-dung" element={<Careers />} />
          <Route path="/lien-he" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
