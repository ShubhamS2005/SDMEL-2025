import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import HeroSection from './Herosection'

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
    </div>
  )
}

export default Home
