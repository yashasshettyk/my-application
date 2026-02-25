import './index.css'
import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy-load below-the-fold sections so initial JS bundle is smaller
const Services     = lazy(() => import('./components/Services'))
const Portfolio    = lazy(() => import('./components/Portfolio'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Pricing      = lazy(() => import('./components/Pricing'))
const Contact      = lazy(() => import('./components/Contact'))
const Footer       = lazy(() => import('./components/Footer'))

// Cubic-bezier as a [number, number, number, number] tuple — valid Framer Motion BezierDefinition
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Navbar — slides down immediately */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <Navbar />
      </motion.div>

      {/* Hero — first paint, no lazy, animates itself internally */}
      <Hero />

      {/* Lazy sections — each fades up as it enters viewport */}
      <Suspense fallback={null}>
        <FadeUp><Services /></FadeUp>
        <FadeUp><Portfolio /></FadeUp>
        <FadeUp><Testimonials /></FadeUp>
        <FadeUp><Pricing /></FadeUp>
        <FadeUp><Contact /></FadeUp>
        <FadeUp><Footer /></FadeUp>
      </Suspense>
    </div>
  )
}

export default App