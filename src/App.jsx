import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import ProposalForm from './components/ProposalForm.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Formats from './components/Formats.jsx'
import Platforms from './components/Platforms.jsx'
import Cases from './components/Cases.jsx'
import Impact from './components/Impact.jsx'
import Coverage from './components/Coverage.jsx'
import LeadCta from './components/LeadCta.jsx'
import Footer from './components/Footer.jsx'

function getRoute() {
  return window.location.hash.replace(/^#/, '')
}

export default function App() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [route])

  if (route === '/proposta') {
    return <ProposalForm />
  }

  return (
    <>
      <Header />
      <Hero />
      <Ticker />
      <Formats />
      <Platforms />
      <Cases />
      <Impact />
      <Coverage />
      <LeadCta />
      <Footer />
    </>
  )
}
