import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'

const App = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='OUR PROGRAM ' Title='What We Offer' />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' Title='Campus photos' />
        <Campus />
        <Title subTitle='TESTMONIALS' Title='What Student says' />
        <Testimonials />
        <Title subTitle='Contact us' Title='Get in touch' />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />

    </div>
  )
}

export default App
