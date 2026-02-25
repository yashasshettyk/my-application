import './index.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageLoader from './components/PageLoader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Match the loader's total duration (1150ms bolt + 300ms fade-out)
    const t = setTimeout(() => setReady(true), 1450)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <PageLoader />
      <motion.div
        className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}

export default App
