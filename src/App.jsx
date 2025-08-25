import { useState } from 'react'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Product from './components/Product'
import Solutions from './components/Solutions'
import Company from './components/Company'
import Testimonial from './components/Testimonial'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <div class="main">
        <div class="layout">
          <Hero/>
          <Insights/>
          <Product/>
          <Solutions/>
          <Company/>
          <Testimonial/>
          <About/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
