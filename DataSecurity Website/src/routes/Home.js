import React from 'react'
import Cloud from '../components/cloud/Cloud'
import Data from '../components/data/Data'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Data />
        <Cloud />
        <Footer />
    </div>
  )
}

export default Home