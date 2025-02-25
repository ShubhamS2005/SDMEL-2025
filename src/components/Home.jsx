import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import HeroSection from './Herosection'
import Footer from './footer/footer'

const Home = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
        <HeroSection/>
      </div>
      <div className='my-28'>
      <Carousel/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
