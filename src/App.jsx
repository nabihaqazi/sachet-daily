import './index.css'
import { useEffect } from 'react'
import useScrollReveal from './hooks/useScrollReveal'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Ingredients from './components/Ingredients'
import Testimonials from './components/Testimonials'
// import Pricing from './components/Pricing'  // Hidden for now — waitlist replaces it
import Waitlist from './components/Waitlist'
import Quiz from './components/Quiz'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()

  // Smooth scroll for all anchor links
  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      const id = target.getAttribute('href').slice(1)
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Quiz />
        <Problem />
        <Solution />
        <HowItWorks />
        <Ingredients />
        <Testimonials />
        {/* <Pricing /> */}
        <Waitlist />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
