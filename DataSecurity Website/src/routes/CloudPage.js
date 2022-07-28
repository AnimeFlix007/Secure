import React from 'react'
import CloudDetailed from '../components/cloud/CloudDetailed'
import MoreCloudDetailed from '../components/cloud/MoreCloudDetailed'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const CloudPage = () => {
  return (
    <div>
        <Navbar />
        <CloudDetailed />
        <hr />
        <MoreCloudDetailed />
        <Footer />
    </div>
  )
}

export default CloudPage