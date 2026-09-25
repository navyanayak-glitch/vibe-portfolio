import { Box } from '@mui/material'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', overflowX: 'hidden' }}>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </Box>
    </MotionConfig>
  )
}
