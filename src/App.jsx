import { useState } from 'react'
import logo from './assets/images/logo.png'
import Hero from './components/HeroSection/Hero'
import Navbar from './components/NavbarSection/navbar'
import PostHero from './components/PostHeroSection/PostHero'
import WhyVerd from './components/WhyVerdSection/WhyVerd'
import Features from './components/Features/Features'
import Faq from './components/FAQ/faq'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <PostHero />
      <WhyVerd />
      <Features />
      <Faq />
      <Footer />
    </>
  )
}

export default App
